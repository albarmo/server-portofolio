const { Cart, Product, Collection } = require('../models');

class CartControllers {
  static async list(req, res) {
    try {
      const data = await Cart.findAll({
        include: {
          model: Product,
        },
      });
      if (data) {
        return res.status(200).json({ data });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async create(req, res) {
    try {
      let inputData = {
        UserId: req.body.UserId,
        ProductId: req.body.ProductId,
        isDropShipping: req.body.isDropShipping,
        receiver: req.body.receiver,
        date: new Date(),
      };
      const newCart = await Cart.create(inputData);
      if (newCart) {
        return res.status(201).json({ newCart });
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async update(req, res) {
    try {
      const CartId = req.params.id;
      let inputDataUpdate = {
        UserId: req.body.UserId,
        ProductId: req.body.ProductId,
        date: new Date(),
        isDropShipping: req.body.isDropShipping,
        receiver: req.body.receiver,
      };
      const updateCart = await Cart.update(inputDataUpdate, {
        where: {
          id: CartId,
        },
        returning: true,
      });
      if (updateCart) {
        return res.status(200).json({ updateCart });
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async delete(req, res) {
    const CartId = req.params.id;
    try {
      const isExist = await Cart.findOne({ where: { id: CartId } });
      if (!isExist) {
        return res.status(404).json({ message: 'Cart data not found!' });
      } else {
        const deleteCarts = await Cart.destroy({
          where: {
            id: CartId,
          },
          returning: true,
        });
        if (deleteCarts) {
          return res.status(200).json({ status: `sucess deleted Cart ${CartId}` });
        }
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = CartControllers;
