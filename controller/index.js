const model = require('../model/index');

/**
 * 获取blog list
 * @param ctx
 * @param next
 */
exports.blogList = async (ctx, next) => {
    try {
        const blog = await model.blogList();
        ctx.body = JSON.stringify(blog, null, 4);
    } catch (e) {
        ctx.throw(e);
    }
}