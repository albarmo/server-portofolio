const { Project } = require('../models');
const uploader = require('../helpers/uploader');

class ProjectController {
  static async list(req, res, next) {
    try {
      const data = await Project.findAll({
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
      const data = await Project.findOne({
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
      const upload = uploader('PROJECT_IMAGE').fields([{ name: 'images' }]);
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

        Project.create(inputData)
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
      const idProject = req.params.id;
      const upload = uploader('Project_IMAGE').fields([{ name: 'images' }]);
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
        Project.update(inputDataUpdate, {
          where: {
            id: idProject,
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
    const idProject = req.params.id;
    try {
      const deleteProject = await Project.destroy({
        where: {
          id: idProject,
        },
        returning: true,
      });
      if (deleteProject) {
        return res.status(200).json({ msg: `sucess deleted Projects ${idProject}` });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProjectController;
