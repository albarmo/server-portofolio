const wishlistRouter = require('express').Router();
const wishlistController = require('../controllers/wishlistControllers');

wishlistRouter.get('/', wishlistController.list);
wishlistRouter.post('/', wishlistController.create);
wishlistRouter.put('/:id', wishlistController.update);
wishlistRouter.delete('/:id', wishlistController.delete);

module.exports = wishlistRouter;
