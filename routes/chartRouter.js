const chartRouter = require('express').Router();
const chartController = require('../controllers/chartControllers');

chartRouter.get('/', chartController.list);
chartRouter.post('/', chartController.create);
chartRouter.put('/:id', chartController.update);
chartRouter.delete('/:id', chartController.delete);

module.exports = chartRouter;
