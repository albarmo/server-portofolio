const bucketRouter = require('express').Router();
const BucketController = require('../controllers/bucketControllers');
const { authorization, authentification } = require('../middleware/Auth');

bucketRouter.use(authentification);
bucketRouter.use(authorization);

bucketRouter.get('/', BucketController.list);
bucketRouter.post('/assign', BucketController.createBucket);
bucketRouter.get('/:id', BucketController.detail);
bucketRouter.delete('/:id', BucketController.delete);

module.exports = bucketRouter;
