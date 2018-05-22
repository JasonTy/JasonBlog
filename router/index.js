const Router = require('koa-router');
const router = new Router();

const blogController = require('./../controller/index');

router.get('/', blogController.blogList);

module.exports = router;