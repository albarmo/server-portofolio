const { Bucket } = require('../models');

class BucketController {
  static async list(req, res, next) {
    try {
      const data = await Bucket.findAll({
        attributes: ['id', 'SourceId', 'StorageId'],
      });
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
      const data = await Bucket.findOne({
        attributes: ['id', 'SourceId', 'StorageId'],
        where: {
          id: id,
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

  static async delete(req, res, next) {
    const idBucket = req.params.id;
    const bucket = await Bucket.findOne({ where: { id: idBucket } });
    try {
      if (!bucket) {
        return res.status(404).json({ message: 'bucket data not found!' });
      } else {
        const deleteBucket = await Bucket.destroy({
          where: {
            id: idBucket,
          },
          returning: true,
        });
        if (deleteBucket) {
          return res.status(200).json({ msg: `sucess deleted file ${idBucket}` });
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async createBucket(req, res, next) {
    const data = {
      SourceId: req.body.SourceId,
      StorageId: req.body.StorageId,
    };

    try {
      const assignBucket = await Bucket.create({ ...data });
      if (assignBucket) {
        return res.status(201).json({
          data,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BucketController;
