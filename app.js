const Koa = require('koa');
const compress = require('koa-compress');
const responseTime = require('koa-response-time');
const router = require('./router/index');
const app = new Koa();

app
    .use(compress())
    .use(responseTime())
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(8008);