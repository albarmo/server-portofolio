const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models');

const authentification = (req, res, next) => {
  const decoded = verifyToken(req.headers.access_token);
  User.findOne({
    where: {
      email: decoded.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ msg: `User not found!` });
      } else {
        req.userData = decoded;
        next();
      }
    })
    .catch((err) => {
      return res.status(500).json({ msg: err.message });
    });
};

const authorization = (req, res, next) => {
  User.findOne({ where: { id: req.userData.id } })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ msg: 'User Not Found' });
      } else if (data.type !== 'admin') {
        return res.status(401).json({ msg: 'You do not have access' });
      } else {
        next();
      }
    })
    .catch((err) => {
      return res.status(500).json({ msg: err.message });
    });
};

const authorizationCart = (req, res, next) => {
  Cart.findByPk(+req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ msg: 'Data Not Founds' });
      } else if (data.UserId !== req.userData.id) {
        return res.status(401).json({ msg: 'You do not have access' });
      } else {
        next();
      }
    })
    .catch((err) => {
      return res.status(500).json({ msg: err.message });
    });
};

module.exports = { authentification, authorization, authorizationCart };
