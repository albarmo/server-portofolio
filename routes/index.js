const router = require('express').Router();
const userRouter = require('./userRouter');
const collectionRouter = require('./collectionRouter');
const bannerRouter = require('./bannerRouter');
const historyRouter = require('./historyRouter');
const productRouter = require('./productRouter');
const chartRouter = require('./chartRouter');
const wishlistRouter = require('./wishlistRouter');
const shippingRouter = require('./shippingRouter');
const transactionRouter = require('./transactionRouter');
const categoriesRouter = require('./categoriesRouter');


router.use('/user', userRouter);
router.use('/products', productRouter);
router.use('/collections', collectionRouter);
router.use('/banners', bannerRouter);
router.use('/history', historyRouter);
router.use('/shippings', shippingRouter);
router.use('/chart', chartRouter);
router.use('/wishlist', wishlistRouter);
router.use('/transaction', transactionRouter);
router.use('/categories', categoriesRouter);


module.exports = router;
