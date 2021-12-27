const bannerRouter = require("express").Router();
const bannerController = require("../controllers/bannersControllers");
  
    
    bannerRouter.post("/", bannerController.createBanner);   
    bannerRouter.get("/", bannerController.getAll);
    bannerRouter.put("/", bannerController.update);
    bannerRouter.delete("/", bannerController.delete);

module.exports = bannerRouter;