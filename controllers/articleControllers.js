const { Article } = require('../models');
const uploader = require('../helpers/uploader');

class ArticleController {
  static async list(req, res, next) {
    try {
      const data = await Article.findAll({
        order: [['title', 'ASC']],
      });
      if (data) {
        return res.status(200).json(data);
      }
    } catch (error) {
      next(error);
    }
  }

  static async detail(req, res, next) {
    const { id } = req.params;
    try {
      const data = await Article.findOne({
        where: {
          id: id,
        },
      });
      if (data) {
        return res.status(200).json(data);
      }
    } catch (error) {
      next(error);
    }
  }

  static create(req, res, next) {
    try {
      const upload = uploader('ARTICLE_IMAGE').fields([{ name: 'images' }]);
      upload(req, res, (err) => {
        if (err) {
          return res.status(500).json({ msg: err });
        }
        const { images } = req.files;
        const imagePath = images ? '/' + images[0].filename : null;

        let inputData = {
          title: req.body.title,
          description: req.body.description,
          images: imagePath,
        };

        Article.create(inputData)
          .then((data) => {
            return res.status(201).json({ data });
          })
          .catch((error) => {
            return res.status(500).json({ message: error });
          });
      });
    } catch (error) {
      next(error);
    }
  }

  static update(req, res, next) {
    try {
      const idArticle = req.params.id;
      const upload = uploader('Article_IMAGE').fields([{ name: 'images' }]);
      upload(req, res, (err) => {
        if (err) {
          return res.status(500).json({ msg: err });
        }
        const { images } = req.files;
        const imagePath = images ? '/' + images[0].filename : null;

        let inputDataUpdate = {
          title: req.body.title,
          description: req.body.description,
          images: imagePath,
        };
        Article.update(inputDataUpdate, {
          where: {
            id: idArticle,
          },
          returning: true,
        })
          .then((data) => {
            return res.status(200).json({ data });
          })
          .catch((error) => {
            return res.status(500).json({ message: error });
          });
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const idArticle = req.params.id;
    try {
      const deleteArticle = await Article.destroy({
        where: {
          id: idArticle,
        },
        returning: true,
      });
      if (deleteArticle) {
        return res.status(200).json({ msg: `sucess deleted Articles ${idArticle}` });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ArticleController;
