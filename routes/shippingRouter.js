const shippingRouter = require("express").Router();
const shippingController = require("../controllers/shippingControllers");
  
    
shippingRouter.post("/", shippingController.createShipping);   
shippingRouter.get("/", shippingController.getAll);
shippingRouter.put("/:id", shippingController.update);
shippingRouter.delete("/:id", shippingController.delete);

module.exports = shippingRouter;
