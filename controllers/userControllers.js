class UserController {
  static async list(req, res) {
    let data = { Status: "ok" };
    return res.status(200).json(data);
  }
}

module.exports = UserController;
