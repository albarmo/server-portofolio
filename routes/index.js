const router = require('express').Router();
const userRouter = require('./userRouter');
const collectionRouter = require('./collectionRouter');
const bannerRouter = require('./bannerRouter');
const historyRouter = require('./historyRouter');
const productRouter = require('./productRouter');
const cartRouter = require('./cartRouter');
const wishlistRouter = require('./wishlistRouter');
const categoriesRouter = require('./categoriesRouter');
const advertisementRouter = require('./advertisementRouter');
const storageRouter = require('./storageRouter');
const bucketRouter = require('./bucketsRouter');

router.use('/user', userRouter);
router.use('/products', productRouter);
router.use('/collections', collectionRouter);
router.use('/banners', bannerRouter);
router.use('/history', historyRouter);
router.use('/cart', cartRouter);
router.use('/wishlist', wishlistRouter);
router.use('/categories', categoriesRouter);
router.use('/advertisement', advertisementRouter);
router.use('/storage', storageRouter);
router.use('/bucket', bucketRouter);

module.exports = router;
