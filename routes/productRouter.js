const productRouter = require('express').Router();
const productController = require('../controllers/productControllers');
const { authorization, authentification } = require('../middleware/Auth');

productRouter.get('/', productController.list);

productRouter.use(authentification);
productRouter.use(authorization);
productRouter.post('/', productController.create);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);

module.exports = productRouter;
