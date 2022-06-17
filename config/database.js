const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
module.exports = new Sequelize(
  "grocery",
  "jamelscott",
  process.env.SUPER_SECRET,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
