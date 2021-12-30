const bannerRouter = require('express').Router();
const bannerController = require('../controllers/bannersControllers');
const { authorization } = require('../middleware/Auth');

bannerRouter.get('/', bannerController.list);
bannerRouter.use(authorization);
bannerRouter.post('/', bannerController.create);
bannerRouter.put('/:id', bannerController.update);
bannerRouter.delete('/:id', bannerController.delete);

module.exports = bannerRouter;
