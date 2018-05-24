const model = require('../model/index');

/**
 * 获取blog list
 * @param ctx
 * @param next
 */
exports.blogList = async (ctx, next) => {
    try {
        const blog = await model.blogList();
        //JSON.stringify(blog, null, 4)
        ctx.body = {
            data: blog
        };
    } catch (e) {
        ctx.throw(e);
    }
}

/**
 * 获取blog detail
 * @param ctx
 * @param next
 */
exports.blogDetail = async (ctx, next) => {
    try {
        const id = ctx.request.body.id;
        const blog = await model.blogDetail(id);
        ctx.body = {
            data: blog
        }
    } catch (e) {
        ctx.throw(e);
    }
}
