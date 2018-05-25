/**
 * Created by tangyitangyi on 2018/5/25.
 */
const Sequelize = require('sequelize');
const sequelize = require('../../dominHelper/dbHelper');

const App = sequelize.define('app', {
    appKey: Sequelize.STRING,
    appSecret: Sequelize.STRING
}, {
    freezeTableName: true, // 不在表名称后默认加s
    timestamps: false // 去掉默认字段
});

module.exports = App;