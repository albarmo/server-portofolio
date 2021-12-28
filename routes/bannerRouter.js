const bannerRouter = require('express').Router();
const bannerController = require('../controllers/bannersControllers');

bannerRouter.get('/', bannerController.list);
bannerRouter.post('/', bannerController.create);
bannerRouter.put('/:id', bannerController.update);
bannerRouter.delete('/:id', bannerController.delete);

module.exports = bannerRouter;
