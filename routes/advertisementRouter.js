const advertisementRouter = require('express').Router();
const advertisementController = require('../controllers/advertisementControllers');
const { authorization } = require('../middleware/Auth');

advertisementRouter.get('/', advertisementController.list);
advertisementRouter.use(authorization);
advertisementRouter.post('/', advertisementController.create);
advertisementRouter.put('/:id', advertisementController.update);
advertisementRouter.delete('/:id', advertisementController.delete);

module.exports = advertisementRouter;
