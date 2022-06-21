const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
module.exports = new Sequelize(
  process.env.DB,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);
