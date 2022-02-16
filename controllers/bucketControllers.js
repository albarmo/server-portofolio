const { Bucket } = require('../models');
const { v4: uuidv4 } = require('uuid');

class BucketController {
  static async list(req, res, next) {
    try {
      const data = await Bucket.findAll();
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

  static create(req, res, next) {
    try {
      const data = {
        id: uuidv4(),
        SourceId: req.body.SourceId,
        BucketId: req.body.BucketId,
      };

      Bucket.create(data)
        .then((data) => {
          return res.status(201).json({ data });
        })
        .catch((error) => {
          return res.status(500).json({ message: error });
        });
    } catch (error) {
      next(error);
    }
  }

  static async createBucket(req, res, next) {
    const data = {
      id: uuidv4(),
      SourceId: req.body.SourceId,
      BucketId: req.body.BucketId,
    };

    try {
      const assignBucket = await Bucket.create(data);
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
