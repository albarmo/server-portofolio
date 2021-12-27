const {Collection, Product} = require('../models');

class collectionControllers {
  static async createCollection(req,res){
    try {
      const collection = await Collection.create(req.body);
      return res.status(400).json({
          collection,
      });
  } catch (error) {
      return res.status(400).json({ error: error.message })
  }
  }
  static async getAll(req,res){
    try {
      const collection = await Collection.findAll({
          include: [
              {
                  model: Product
              }
          ]
      });
      return res.status(400).json({ collection });
  } catch (error) {
      return res.status(400).json(error.message);
  }
  }
    static async update(req,res){
      try {
        await Collection.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.json({
            "message": "Collection Updated"
        });
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Some error update Collections.',
    });
    }
  }
  static async delete(req,res){
    try {
      await Collection.destroy(req.body, {
          where: {
              id: req.params.id
          }
      });
      return res.json({
          "message": "Collection was deleted"
      });
  } catch (err) {
    return res.status(400).json({
      message: err.message || 'Some error delete Collections.',
    });
    }
  }
}
module.exports= collectionControllers;
