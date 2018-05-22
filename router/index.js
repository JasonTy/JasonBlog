const Router = require('koa-router');
const router = new Router();

const blogController = require('./../controller/index');


router.get('/', blogController.blogList);

router.get('/tangyi', (ctx, next) => {
    ctx.body = "tangyi1234";
});

module.exports = router;