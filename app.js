const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const responseTime = require('koa-response-time');
const router = require('./router/index');
const app = new Koa();


app.use(bodyParser());
app.use(compress());
app.use(responseTime());
app.use(router.routes());
app.use(router.allowedMethods());


app.on('error', err => {

});


app.listen(8008, () => {
    console.log('API 8008 启动');
});