const collectionRouter = require("express").Router();
const collectionController = require("../controllers/collectionControllers");
  
    
    collectionRouter.post("/", collectionController.createCollection);   
    collectionRouter.get("/", collectionController.getAll);
    collectionRouter.put("/", collectionController.update);
    collectionRouter.delete("/", collectionController.delete);

module.exports = collectionRouter;
