const { Wishlist } = require('../models');

class WishlistControllers {
  static async list(req, res) {
    try {
      const data = await Wishlist.findAll();
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
        userId: req.body.userId,
        productId: req.body.productId,
        date: new Date(),
      };
      const newWishlist = await Wishlist.create(inputData);
      if (newWishlist) {
        return res.status(201).json({ newWishlist });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      let inputData = {
        userId: req.body.userId,
        productId: req.body.productId,
        date: new Date(),
      };
      const updateWishlist = await Wishlist.update(inputData, {
        where: {
          id: id,
        },
        returning: true,
      });
      if (updateWishlist) {
        return res.status(200).json({ updateWishlist });
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const deleteWishlist = await Wishlist.destroy({
        where: { id: id },
        returning: true,
      });
      if (deleteWishlist) {
        return res.status(200).json({ message: `success delete wishlist with id ${id}` });
      } else {
        return res.status(404).json({ message: `failed, delete wishlist with id ${id} not found` });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = WishlistControllers;
