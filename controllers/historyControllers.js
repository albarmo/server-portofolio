const {User , Transaction, History } = require('../models');

class HistoryControllers{
    static async createHistory(req,res){
        try {
          const history = await History.create(req.body);
          return res.status(400).json({
              history,
          });
          } catch (error) {
          return res.status(400).json({ error: error.message })
          }
      }
      static async getAll(req, res){
          try{
              const history = await History.findAll({
                  include: [{
                      model: User,Transaction
                  }
                ]
              });
              return res.status(400).json({history});
          } catch (error){
              return res.status(400).json({error:error.message});
          }
      }
}
module.exports = HistoryControllers;