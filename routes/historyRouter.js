const historyRouter = require('express').Router();
const HistoryController = require('../controllers/historyControllers');

historyRouter.get('/', HistoryController.list);
historyRouter.post('/', HistoryController.create);

module.exports = historyRouter;
