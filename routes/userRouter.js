const userRouter = require('express').Router();
const userController = require('../controllers/userControllers');
const { authorization, authentification } = require('../middleware/Auth');

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);

userRouter.use(authentification);
userRouter.get('/', userController.list);

userRouter.use(authorization);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
