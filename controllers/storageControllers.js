const { Storage, Product, Bucket } = require('../models');
const uploader = require('../helpers/uploader');
const { v4: uuidv4 } = require('uuid');

class StorageController {
  static async list(req, res, next) {
    try {
      const data = await Storage.findAll();
      if (data) {
        return res.status(200).json(data);
      }
    } catch (error) {
      next(error);
    }
  }

  static async detail(req, res, next) {
    const { id } = req.params;
    try {
      const data = await Storage.findOne({
        where: {
          id: id,
        },
        include: {
          model: Product,
          attributes: ['id', 'title'],
          as: 'ProductInStorage',
        },
      });
      if (data) {
        return res.status(200).json(data);
      } else {
        return res.status(404).json({ message: 'file not exist' });
      }
    } catch (error) {
      next(error);
    }
  }

  static upload(req, res, next) {
    try {
      const upload = uploader('STORAGE_IMAGE').fields([{ name: 'file' }]);
      upload(req, res, (err) => {
        if (err) {
          return res.status(500).json({ msg: err });
        }
        const { file } = req.files;
        const imagePath = file ? '/' + file[0].filename : null;

        let uploadData = {
          file: imagePath,
          type: req.body.type,
        };

        Storage.create(uploadData)
          .then((data) => {
            return res.status(201).json({ id: data.id });
          })
          .catch((error) => {
            return res.status(500).json({ message: error });
          });
      });
    } catch (error) {
      next(error);
    }
  }

  static update(req, res, next) {
    try {
      const idStorage = req.params.id;
      const upload = uploader('STORAGE_IMAGE').fields([{ name: 'file' }]);
      upload(req, res, (err) => {
        if (err) {
          return res.status(500).json({ msg: err });
        }
        const { file } = req.files;
        const imagePath = file ? '/' + file[0].filename : null;

        let updatedData = {
          file: imagePath,
          type: req.body.type,
        };

        Storage.update(updatedData, {
          where: {
            id: idStorage,
          },
          returning: true,
        })
          .then((data) => {
            return res.status(200).json({ data });
          })
          .catch((error) => {
            return res.status(500).json({ message: error });
          });
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const idStorage = req.params.id;
    const storage = await Storage.findOne({ where: { id: idStorage } });
    try {
      if (!storage) {
        return res.status(404).json({ message: 'storage data not found!' });
      } else {
        const deleteStorage = await Storage.destroy({
          where: {
            id: idStorage,
          },
          returning: true,
        });
        if (deleteStorage) {
          return res.status(200).json({ msg: `sucess deleted file ${idStorage}` });
        }
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = StorageController;
