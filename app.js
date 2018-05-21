const Koa = require('koa');
const compress = require('koa-compress');
const router = require('./router/index');
const app = new Koa();

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(compress());

app.listen(8008);