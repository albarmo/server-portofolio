const { Banner } = require('../models');
const uploader = require('../helpers/uploader');

class BannerController {
  static async list(req, res) {
    try {
      const data = await Banner.findAll();
      if (data) {
        return res.status(200).json({ data });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static create(req, res) {
    try {
      const upload = uploader('BANNER_IMAGE').fields([{ name: 'file' }]);
      upload(req, res, (err) => {
        if (err) {
          console.log('Failed to upload banner file', err);
          return res.status(500).json({ msg: err });
        }
        const { file } = req.files;

        console.log(req.files, 'ini');
        const imagePath = file ? '/' + file[0].filename : null;

        let inputData = {
          title: req.body.title,
          description: req.body.description,
          target: req.body.target,
          date: new Date(),
          file: imagePath,
        };

        Banner.create(inputData)
          .then((data) => {
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
      const upload = uploader('BANNER_IMAGE').fields([{ name: 'file' }]);
      upload(req, res, (err) => {
        if (err) {
          console.log('Failed to upload banner image', err);
          return res.status(500).json({ msg: err });
        }
        const { file } = req.files;
        const imagePath = file ? '/' + file[0].filename : null;

        let inputDataUpdate = {
          title: req.body.title,
          description: req.body.description,
          target: req.body.target,
          date: new Date(),
          file: imagePath,
        };
        Banner.update(inputDataUpdate, {
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
      const banner = await Banner.destroy(req.body, {
        where: {
          id: id,
        },
      });
      return res.status(400).json(banner);
    } catch (error) {
      res.status(400).json({ error: error.message || 'Some error Delete Banners.' });
    }
  }
}
module.exports = BannerController;
