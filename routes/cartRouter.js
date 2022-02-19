const cartRouter = require('express').Router();
const CartController = require('../controllers/cartControllers');
const { authentification, authorization } = require('../middleware/Auth');

cartRouter.use(authentification);
cartRouter.get('/:status', CartController.list);
cartRouter.post('/', CartController.create);
cartRouter.put('/:id', CartController.update);
cartRouter.delete('/:id/:status', CartController.delete);
cartRouter.get('/checkout', CartController.checkout);
cartRouter.get('/history/:status', CartController.getCartHistoryByStatus);

cartRouter.use(authorization);
cartRouter.get('/all', CartController.allChart);
module.exports = cartRouter;
