const articleRouter = require('express').Router();
const ArticleController = require('../controllers/articleControllers');
const { authorization, authentification } = require('../middleware/Auth');

articleRouter.get('/', ArticleController.list);
articleRouter.get('/:id', ArticleController.detail);

articleRouter.use(authentification);
articleRouter.use(authorization);
articleRouter.post('/', ArticleController.create);
articleRouter.put('/:id', ArticleController.update);
articleRouter.delete('/:id', ArticleController.delete);

module.exports = articleRouter;
