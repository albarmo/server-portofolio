const categoriesRouter = require('express').Router();
const categoriesController = require('../controllers/categoriesControllers');
const { authorization } = require('../middleware/Auth');

categoriesRouter.get('/', categoriesController.list);
categoriesRouter.use(authorization);
categoriesRouter.post('/', categoriesController.create);
categoriesRouter.put('/:id', categoriesController.update);
categoriesRouter.delete('/:id', categoriesController.delete);

module.exports = categoriesRouter;
