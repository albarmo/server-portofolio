const router = require("express").Router();
const userRouter = require("./userRouter");
const collectionRouter = require("./collectionRouter")

router.use("/user", userRouter);
router.use("/collection",collectionRouter);

module.exports = router;
