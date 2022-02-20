const { Cart, Product, sequelize } = require('../models');
const { Op } = require('sequelize');

class CartControllers {
  static async list(req, res, next) {
    const status = req.params.status;
    try {
      const data = await Cart.findAll({
        where: { UserId: req.userData.id, status: status },
        include: {
          model: Product,
          where: {
            stock: {
              [Op.gt]: 0,
            },
          },
          order: [['title', 'ASC']],
        },
      });
      if (data) {
        return res.status(200).json({ data });
      } else {
        return res.status(404).json({ message: 'You dont have any cart' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async allChart(req, res, next) {
    try {
      const data = await Cart.findAll({
        include: {
          model: Product,
        },
      });
      if (data) {
        return res.status(200).json({ data });
      } else {
        return res.status(404).json({ message: 'You dont have any cart' });
      }
    } catch (error) {
      next();
    }
  }

  static async create(req, res, next) {
    let UserId = req.userData.id;
    let ProductId = req.body.ProductId;
    const variant = req.body.variant;
    const size = req.body.size;
    let quantityInput = +req.body.quantity || 1;

    let inputData = {
      UserId: UserId,
      ProductId: ProductId,
      isDropShipping: req.body.isDropShipping,
      receiver: req.body.receiver,
      shippedDate: req.body.shippedDate,
      quantity: quantityInput,
      status: 'unpaid',
      variant: variant,
      size: size,
    };

    //add field
    // 1. variant
    // 2. size

    try {
      const existingCart = await Cart.findOne({
        where: {
          UserId,
          ProductId,
          status: 'unpaid',
          variant: variant,
          size: size,
        },
      });

      console.log(existingCart);

      //kalo dia ada update aja lang
      //kalo dia gaada masukin

      if (existingCart) {
        let totalQuantity = existingCart.quantity + quantityInput;
        const updateCart = existingCart.update({ quantity: totalQuantity });
        if (updateCart) {
          return res.status(200).json({ message: 'Success update cart quantity' });
        }
      } else {
        const newCart = await Cart.create(inputData);
        if (newCart) {
          return res.status(201).json({ newCart });
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const CartId = req.params.id;
    const ProductId = req.body.ProductId;
    const UserId = req.userData.id;
    const requestQuantity = req.body.quantity;

    try {
      const cart = await Cart.findOne({
        where: {
          id: CartId,
        },
      });

      if (cart) {
        const product = await Product.findByPk(ProductId);

        if (requestQuantity > product.dataValues?.stock) {
          return res
            .status(200)
            .json({ message: `Product not in stock, ${product.dataValues?.stock} items remaining` });
        } else {
          const updateCart = await Cart.update(
            {
              UserId: UserId,
              ProductId: ProductId,
              isDropShipping: req.body.isDropShipping,
              receiver: req.body.receiver,
              shippedDate: req.body.shippedDate,
              quantity: requestQuantity,
              status: req.body.status,
            },
            {
              where: {
                id: CartId,
              },
              returning: true,
            }
          );
          if (updateCart) {
            return res.status(200).json({ updateCart });
          }
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const UserId = req.userData.id;
    const CartId = req.params.id;
    const t = await sequelize.transaction();
    const status = req.params.status;

    try {
      const cart = await Cart.findAll(
        {
          where: {
            UserId,
            status: status,
            id: CartId,
          },
        },
        { transaction: t }
      );

      if (!cart?.lenght) {
        try {
          for (const item of cart) {
            const product = await Product.findByPk(item.ProductId);
            let revertStock = product.stock + item.quantity;

            await product.update({ stock: revertStock });
            await item.update({ status: 'cannceled' });
          }
          t.afterCommit(() => {
            return res.status(200).json({ status: `sucess deleted Cart ${CartId}` });
          });
        } catch (error) {
          await t.rollback();
          return res.status(500).json({ status: `Error while revert cart` });
        }

        await t.commit();
      } else {
        return res.status(404).json({ status: `Cart not found` });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getCartHistoryByStatus(req, res, next) {
    const { status } = req.params;
    try {
      const completedCart = await Cart.findAll({
        where: {
          UserId: req.userData.id,
          status: status,
        },
        include: {
          model: Product,
        },
      });

      if (completedCart) {
        return res.status(200).json({ data: completedCart });
      } else {
        return res.status(404).json({ message: 'Dont have any completed transaction' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async checkout(req, res, next) {
    console.log('checkouts');
    let UserId = req.userData.id;
    const t = await sequelize.transaction();

    try {
      const cart = await Cart.findAll(
        {
          where: {
            UserId,
            status: 'unpaid',
          },
        },
        { transaction: t }
      );

      for (const item of cart) {
        const product = await Product.findByPk(item.ProductId);
        console.log(product, 'product');

        if (item.quantity > product.stock) {
          console.log('masuk error out og stock');
          throw new Error('Product out of stock');
        } else {
          console.log('masuk change stock');
          let newStock = product.stock - item.quantity;
          await product.update({ stock: newStock });
          await item.update({ status: 'waiting-payment' });
        }
      }
      t.afterCommit(() => {
        return res.status(200).json({ msg: 'Checkout Success' });
      });
      await t.commit();
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
}

module.exports = CartControllers;
