const collectionRouter = require('express').Router();
const CategoriesController = require('../controllers/CategoriesControllers');
const { authorization, authentification } = require('../middleware/Auth');

collectionRouter.get('/', CategoriesController.list);

collectionRouter.use(authentification);
collectionRouter.use(authorization);
collectionRouter.post('/', CategoriesController.create);
collectionRouter.put('/:id', CategoriesController.update);
collectionRouter.delete('/:id', CategoriesController.delete);

module.exports = collectionRouter;
