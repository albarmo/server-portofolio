const axios = require('axios');

class OngkirController {
  static async getProvince(req, res, next) {
    try {
      const province = await axios.get(`${process.env.RAJAONGKIR_BASEURL}/province`, {
        headers: {
          key: process.env.RAJAONGKIR_SECRET,
        },
      });
      console.log({ province }, 'province');
      return res.status(200).json(province?.data);
    } catch (error) {
      next(error);
    }
  }
  static async getCity(req, res, next) {
    try {
      const city = await axios.get(`${process.env.RAJAONGKIR_BASEURL}/city`, {
        headers: { key: process.env.RAJAONGKIR_SECRET },
      });
      return res.status(200).json(city?.data);
    } catch (error) {
      next(error);
    }
  }

  static async getTown(req, res, next) {
    const { townId } = req.params;
    try {
      const city = await axios.get(`${process.env.RAJAONGKIR_BASEURL}/city`, {
        params: { province: townId },
        headers: { key: process.env.RAJAONGKIR_SECRET },
      });
      return res.status(200).json(city?.data);
    } catch (error) {
      next(error);
    }
  }

  static async getEstimationCost(req, res, next) {
    const { origin, destination, weight, courier } = req.body;
    console.log(origin, destination, weight, courier);
    try {
      const predictCost = await axios.post(
        `${process.env.RAJAONGKIR_BASEURL}/cost`,
        { origin, destination, weight, courier },
        {
          headers: { key: process.env.RAJAONGKIR_SECRET },
        }
      );
      return res.status(200).json(predictCost?.data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OngkirController;
