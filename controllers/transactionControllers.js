const { Transaction } = require('../models');

class TransactionControllers {
  static async list(req, res) {
    try {
      const transaction = await Transaction.findAll();
      return res.status(200).json({ transaction });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
module.exports = TransactionControllers;
