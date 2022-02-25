const ongkirRouter = require('express').Router();
const OngkirController = require('../controllers/ongkir.controllers');

ongkirRouter.get('/province', OngkirController.getProvince);
ongkirRouter.get('/city', OngkirController.getCity);
ongkirRouter.get('/city/:townId', OngkirController.getTown);
ongkirRouter.post('/cost', OngkirController.getEstimationCost);

module.exports = ongkirRouter;
