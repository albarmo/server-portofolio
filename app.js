require("dotenv").config();

const express = require("express");
const App = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const logger = require("morgan");
const routes = require("./routes");

App.use(logger("dev"));
App.use(cors());

App.use(express.urlencoded({ extended: "false" }));
App.use(express.json());

App.use(routes);

App.get("/", (req, res) => {
  return res.status(200).json({ ServerStatus: `Running` });
});

App.listen(port, () => {
  console.log(`This Server running on port ${port}`);
});

module.exports = App;
