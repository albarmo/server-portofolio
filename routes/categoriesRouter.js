const categoriesRouter = require('express').Router();
const categoriesController = require('../controllers/categoriesControllers');

categoriesRouter.get('/', categoriesController.list);
categoriesRouter.post('/', categoriesController.create);
categoriesRouter.put('/:id', categoriesController.update);
categoriesRouter.delete('/:id', categoriesController.delete);

module.exports = categoriesRouter;
