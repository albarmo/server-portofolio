const userRouter = require('express').Router();
const userController = require('../controllers/userControllers');

userRouter.get('/', userController.list);
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
