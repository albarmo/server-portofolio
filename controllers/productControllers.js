const { Product } = require('../models');
const uploader = require('../helpers/uploader');

class ProductController {
  static async list(req, res) {
    try {
      const data = await Product.findAll();
      if (data) {
        return res.status(200).json({ data });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static create(req, res) {
    try {
      const upload = uploader('PRODUCT_IMAGE').fields([{ name: 'images' }]);
      upload(req, res, (err) => {
        if (err) {
          console.log('Failed to upload product image', err);
          return res.status(500).json({ msg: err });
        }
        const { images } = req.files;
        const imagePath = images ? '/' + images[0].filename : null;

        let inputData = {
          title: req.body.title,
          categories: req.body.categories,
          color: req.body.color,
          size: req.body.size,
          description: req.body.description,
          stock: req.body.stock,
          images: imagePath,
          price: req.body.price,
          weight: req.body.weight,
          quantity: req.body.quantity,
        };

        Product.create(inputData)
          .then((data) => {
            console.log(data);
            return res.status(201).json({ data });
          })
          .catch((error) => {
            return res.status(500).json({ message: error });
          });
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static update(req, res) {
    try {
      const idProduct = req.params.id;
      const upload = uploader('PRODUCT_IMAGE').fields([{ name: 'images' }]);
      upload(req, res, (err) => {
        if (err) {
          console.log('Failed to upload product image', err);
          return res.status(500).json({ msg: err });
        }
        const { images } = req.files;
        const imagePath = images ? '/' + images[0].filename : null;

        let inputDataUpdate = {
          title: req.body.title,
          categories: req.body.categories,
          color: req.body.color,
          size: req.body.size,
          description: req.body.description,
          stock: req.body.stock,
          images: imagePath,
          price: req.body.price,
          weight: req.body.weight,
          quantity: req.body.quantity,
        };
        Product.update(inputDataUpdate, {
          where: {
            id: idProduct,
          },
          returning: true,
        })
          .then((data) => {
            console.log(data);
            return res.status(201).json({ data });
          })
          .catch((error) => {
            return res.status(500).json({ message: error });
          });
      });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async delete(req, res) {
    const idProduct = req.params.id;
    const product = await Product.findOne({ where: { id: idProduct } });
    try {
      if (!product) {
        return res.status(404).json({ message: 'product data not found!' });
      } else {
        const deleteProduct = await Product.destroy({
          where: {
            id: idProduct,
          },
          returning: true,
        });
        if (deleteProduct) {
          return res.status(200).json({ msg: `sucess deleted products ${idProduct}` });
        }
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = ProductController;
