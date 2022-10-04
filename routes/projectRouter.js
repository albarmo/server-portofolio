const projectRouter = require('express').Router();
const ProjectController = require('../controllers/projectControllers');
const { authorization, authentification } = require('../middleware/Auth');

projectRouter.get('/', ProjectController.list);
projectRouter.get('/:id', ProjectController.detail);

projectRouter.use(authentification);
projectRouter.use(authorization);
projectRouter.post('/', ProjectController.create);
projectRouter.put('/:id', ProjectController.update);
projectRouter.delete('/:id', ProjectController.delete);

module.exports = projectRouter;
