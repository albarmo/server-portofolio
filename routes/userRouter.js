const userRouter = require("express").Router();
const controller = require("../controllers/userControllers");

userRouter.get("/", controller.list);

module.exports = userRouter;
