const Router = require('koa-router');
const router = new Router();

const blogController = require('./../controller/index');

router.post('/v1/api/blogList', blogController.blogList);

router.post('/v1/api/blogDetail', blogController.blogDetail);

module.exports = router;