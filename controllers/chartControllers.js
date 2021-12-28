const { Chart } = require('../models');

class ChartControllers {
  static async list(req, res) {
    try {
      const data = await Chart.findAll();
      if (data) {
        return res.status(200).json({ data });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async create(req, res) {
    try {
      let inputData = {
        userId: req.body.userId,
        productId: req.body.productId,
        date: new Date(),
        shippingId: req.body.shippingId,
        isDropShipping: req.body.isDropShipping,
        receiver: req.body.receiver,
      };
      const newChart = await Chart.create(inputData);
      if (newChart) {
        return res.status(201).json({ newChart });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const chartId = req.params.id;
      let inputDataUpdate = {
        userId: req.body.userId,
        productId: req.body.productId,
        date: new Date(),
        shippingId: req.body.shippingId,
        isDropShipping: req.body.isDropShipping,
        receiver: req.body.receiver,
      };
      const updateChart = await Chart.update(inputDataUpdate, {
        where: {
          id: chartId,
        },
        returning: true,
      });
      if (updateChart) {
        return res.status(200).json({ updateChart });
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async delete(req, res) {
    const chartId = req.params.id;
    try {
      const isExist = await Chart.findOne({ where: { id: chartId } });
      if (!isExist) {
        return res.status(404).json({ message: 'chart data not found!' });
      } else {
        const deleteCharts = await Chart.destroy({
          where: {
            id: chartId,
          },
          returning: true,
        });
        if (deleteCharts) {
          return res.status(200).json({ status: `sucess deleted chart ${chartId}` });
        }
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = ChartControllers;
