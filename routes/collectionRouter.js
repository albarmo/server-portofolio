const collectionRouter = require("express").Router();
const collection = require("../controllers/collectionControllers");
  
    // Create a new Tutorial
    collectionRouter.post("/", collection.create);
  
    // Retrieve all Tutorials
    collectionRouter.get("/", collection.findAll);

module.exports = collectionRouter;
