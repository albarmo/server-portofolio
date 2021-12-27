const historyRouter = require("express").Router();
const HistoryController = require("../controllers/historyControllers");
  
    
    historyRouter.post("/", HistoryController.createHistory);   
    historyRouter.get("/", HistoryController.getAll);

module.exports = historyRouter;
