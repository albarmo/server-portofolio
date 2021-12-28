const collectionRouter = require('express').Router();
const collectionController = require('../controllers/collectionControllers');

collectionRouter.get('/', collectionController.list);
collectionRouter.post('/', collectionController.create);
collectionRouter.put('/:id', collectionController.update);
collectionRouter.delete('/:id', collectionController.delete);

module.exports = collectionRouter;
