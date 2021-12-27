const productRouter = require('express').Router();
const productController = require('../controllers/productControllers');

productRouter.get('/', productController.list);
productRouter.post('/', productController.create);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);

module.exports = productRouter;
