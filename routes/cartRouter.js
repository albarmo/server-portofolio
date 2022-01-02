const cartRouter = require('express').Router();
const cartController = require('../controllers/cartControllers');
const { authentification, authorizationCart } = require('../middleware/Auth');

cartRouter.use(authentification);
cartRouter.get('/', cartController.list);

cartRouter.use(authorizationCart);
cartRouter.post('/', cartController.create);
cartRouter.put('/:id', cartController.update);
cartRouter.delete('/:id', cartController.delete);

module.exports = cartRouter;
