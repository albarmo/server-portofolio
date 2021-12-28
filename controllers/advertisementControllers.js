const { Advertisement } = require('../models');
const uploader = require('../helpers/uploader');

class AdvertisementControllers {
  static async list(req, res) {
    try {
      const advertisement = await Advertisement.findAll();
      return res.status(200).json({ advertisement });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static create(req, res) {
    try {
      const upload = uploader('ADS_IMAGE').fields([{ name: 'file' }]);
      upload(req, res, (err) => {
        if (err) {
          console.log('Failed to upload ads image', err);
          return res.status(500).json({ msg: err });
        }
        const { file } = req.files;
        const imagePath = file ? '/' + file[0].filename : null;

        let inputData = {
          title: req.body.title,
          target: req.body.target,
          date: new Date(),
          startDate: req.body.startDate,
          expiredDate: req.body.expiredDate,
          file: imagePath,
        };

        Advertisement.create(inputData)
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
      const { id } = req.params;
      const upload = uploader('ADS_IMAGE').fields([{ name: 'file' }]);
      upload(req, res, (err) => {
        if (err) {
          console.log('Failed to upload ads image', err);
          return res.status(500).json({ msg: err });
        }
        const { file } = req.files;
        const imagePath = file ? '/' + file[0].filename : null;

        let inputDataUpdate = {
          title: req.body.title,
          target: req.body.target,
          date: new Date(),
          startDate: req.body.startDate,
          expiredDate: req.body.expiredDate,
          file: imagePath,
        };
        Advertisement.update(inputDataUpdate, {
          where: {
            id: id,
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
    const { id } = req.params;
    try {
      const advertisement = Advertisement.findOne({
        where: {
          id: id,
        },
      });
      if (advertisement) {
        return res.status(404).json({ message: 'Advertisment not found!' });
      } else {
        const deleteAdvertisement = await Advertisement.destroy({
          where: {
            id: id,
          },
          returning: true,
        });
        return res.status(200).json({ deleteAdvertisement });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = AdvertisementControllers;
