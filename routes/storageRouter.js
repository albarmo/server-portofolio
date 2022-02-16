const storageRouter = require('express').Router();
const StorageController = require('../controllers/storageControllers');
const { authorization, authentification } = require('../middleware/Auth');

storageRouter.post('/assign', StorageController.assignBucket);
storageRouter.get('/buckets', StorageController.bucketList);
storageRouter.get('/', StorageController.list);
storageRouter.get('/:id', StorageController.detail);

storageRouter.use(authentification);
storageRouter.use(authorization);
storageRouter.post('/', StorageController.upload);
storageRouter.put('/:id', StorageController.update);
storageRouter.delete('/:id', StorageController.delete);

module.exports = storageRouter;
