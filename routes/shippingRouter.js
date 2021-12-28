const shippingRouter = require('express').Router();
const shippingController = require('../controllers/shippingControllers');

shippingRouter.get('/', shippingController.list);
shippingRouter.post('/', shippingController.create);
shippingRouter.put('/:id', shippingController.update);
shippingRouter.delete('/:id', shippingController.delete);

module.exports = shippingRouter;
