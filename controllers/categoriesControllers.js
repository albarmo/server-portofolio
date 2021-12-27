const { Categorie } = require('../models');

class CategorieControllers {
  static async list(req, res) {
    try {
      const data = await Categorie.findAll();
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
        productId: req.body.productId,
        collectionId: req.body.collectionId,
        title: req.body.title,
      };
      const newCategorie = await Categorie.create(inputData);
      if (newCategorie) {
        return res.status(201).json({ newCategorie });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const categorieId = req.params.id;
      let inputDataUpdate = {
        productId: req.body.productId,
        collectionId: req.body.collectionId,
        title: req.body.title,
      };
      const updateCategorie = await Categorie.update(inputDataUpdate, {
        where: {
          id: categorieId,
        },
        returning: true,
      });
      if (updateCategorie) {
        return res.status(201).json({ updateCategorie });
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async delete(req, res) {
    const categorieId = req.params.id;
    try {
      const isExist = await Categorie.findOne({ where: { id: categorieId } });
      if (!isExist) {
        return res.status(404).json({ message: 'categorie data not found!' });
      } else {
        const deleteCategories = await Categorie.destroy({
          where: {
            id: categorieId,
          },
          returning: true,
        });
        if (deleteCategories) {
          return res.status(200).json({ status: `sucess deleted categorie ${categorieId}` });
        }
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = CategorieControllers;
