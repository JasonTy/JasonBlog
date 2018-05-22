const Blog = require('./orm/blog');

/**
 * 获取博客表列表
 */
exports.blogList = async () => {
    return Blog.findAll({});
}