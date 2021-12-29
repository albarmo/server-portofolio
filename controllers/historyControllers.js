const { User, Transaction, History } = require('../models');

class HistoryControllers {
  static async list(req, res) {
    try {
      const history = await History.findAll({});
      return res.status(200).json({ history });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async create(req, res) {
    const inputData = {
      UserId: req.body.UserId,
      transactionId: req.body.transactionId,
      date: new Date(),
      status: req.body.status,
      paymentDate: req.body.paymentDate,
    };
    try {
      const history = await History.create(inputData);
      return res.status(201).json({
        history,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = HistoryControllers;
