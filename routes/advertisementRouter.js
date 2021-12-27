const advertisementRouter = require("express").Router();
const advertisementController = require("../controllers/advertisementControllers");
  
    
    advertisementRouter.post("/", advertisementController.createAdvertisement);   
    advertisementRouter.get("/", advertisementController.getAll);
    advertisementRouter.put("/", advertisementController.update);
    advertisementRouter.delete("/", advertisementController.delete);

module.exports = advertisementRouter;
