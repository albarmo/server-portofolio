const router = require("express").Router();
const userRouter = require("./userRouter");
const collectionRouter = require("./collectionRouter");
const bannerRouter = require("./bannerRouter");
const historyRouter = require("./historyRouter");

router.use("/user", userRouter);
router.use("/collections",collectionRouter);
router.use("/banners",bannerRouter);
router.use("/history",historyRouter);

module.exports = router;
