const productRouter = require('express').Router();
const ProductController = require('../controllers/productControllers');
const { authorization, authentification } = require('../middleware/Auth');

productRouter.get('/', ProductController.list);
productRouter.get('/:id', ProductController.detail);
productRouter.get('/category/:id', ProductController.filterbyCategory);
productRouter.get('/collections/:id', ProductController.filterbyCollections);

productRouter.use(authentification);
productRouter.use(authorization);
productRouter.post('/', ProductController.create);
productRouter.put('/:id', ProductController.update);
productRouter.delete('/:id', ProductController.delete);

module.exports = productRouter;
