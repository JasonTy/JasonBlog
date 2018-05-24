const Blog = require('./orm/blog');

/**
 * 获取博客表列表
 */
exports.blogList = async () => {
    return Blog.findAll({
        attributes: ['id', 'title', 'stitle'],
        order: [
            ['id', 'desc']
        ]
    });
}

/**
 * 获取博客详情
 * @returns {*}
 */
exports.blogDetail = async (id) => {
    return Blog.findById(id);
}