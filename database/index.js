const sequelize = require("./dbConnections");

const users = require("./tables/users");
const admins = require("./tables/admin")

const models = { users,admins };
sequelize.models = models;

module.exports = { sequelize, models };
