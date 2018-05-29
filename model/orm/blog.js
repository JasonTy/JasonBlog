/**
 * Created by tangyitangyi on 2018/5/22.
 */
const Sequelize = require('sequelize');
const sequelize = require('../../dominHelper/dbHelper');

const Blog = sequelize.define('blog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    } ,
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
    stitle: Sequelize.STRING,
    scontent: Sequelize.STRING
}, {
    freezeTableName: true, // 不在表名称后默认加s
    timestamps: false // 去掉默认字段
});

module.exports = Blog;