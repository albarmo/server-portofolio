const transactionRouter = require('express').Router();
const transactionController = require('../controllers/transactionControllers');

transactionRouter.get('/', transactionController.list);

module.exports = transactionRouter;
