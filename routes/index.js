const router = require('express').Router();
const userRouter = require('./userRouter');
const bannerRouter = require('./bannerRouter');
const projectRouter = require('./projectRouter');
const articleRouter = require('./articleRouter');

router.use('/user', userRouter);
router.use('/project', projectRouter);
router.use('/article', articleRouter);
router.use('/banner', bannerRouter);

module.exports = router;
