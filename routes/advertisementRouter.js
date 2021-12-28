const advertisementRouter = require('express').Router();
const advertisementController = require('../controllers/advertisementControllers');

advertisementRouter.get('/', advertisementController.list);
advertisementRouter.post('/', advertisementController.create);
advertisementRouter.put('/:id', advertisementController.update);
advertisementRouter.delete('/:id', advertisementController.delete);

module.exports = advertisementRouter;
