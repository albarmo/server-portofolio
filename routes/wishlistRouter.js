const wishlistRouter = require('express').Router();
const wishlistController = require('../controllers/wishlistControllers');
const { authentification } = require('../middleware/Auth');

wishlistRouter.use(authentification);
wishlistRouter.get('/', wishlistController.list);

wishlistRouter.use(authentification);
wishlistRouter.post('/', wishlistController.create);
wishlistRouter.put('/:id', wishlistController.update);
wishlistRouter.delete('/:id', wishlistController.delete);

module.exports = wishlistRouter;
