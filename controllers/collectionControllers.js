const db = require("../models");
const Collection = db.Collection;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }


  const collection = {
    title: req.body.title,
    productId: req.body.productId,
    image: req.body.image ? req.body.image : false
  };

  Collection.create(collection)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Col."
    });
  });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Collection.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Coll."
      });
    });
};


// exports.findOne = (req, res) => {
  
// };


// exports.update = (req, res) => {
  
// };


// exports.delete = (req, res) => {
  
// };

// exports.deleteAll = (req, res) => {
  
// };


// exports.findAllPublished = (req, res) => {
  
// };