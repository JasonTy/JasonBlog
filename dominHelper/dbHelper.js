const Sequelize = require('sequelize');
const mysqlConfig = require('./../config/development');

const sequelize = new Sequelize('mysql', mysqlConfig.mysql.userName, mysqlConfig.mysql.password, {
    host: mysqlConfig.mysql.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    port: mysqlConfig.mysql.port,
    operatorsAliases: false
});

module.exports = sequelize;