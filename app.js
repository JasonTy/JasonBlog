const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const responseTime = require('koa-response-time');
const cors = require('koa-cors');
const router = require('./router/index');
const auth = require('./controller/middleware/auth');
const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(compress());
app.use(responseTime());

app.use(async (ctx, next) => {
    try {
        await auth(ctx);
        await next();
    } catch (e) {
        console.log(e);
        return ctx.body = e;
    }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.on('error',  (err, ctx) => {
    console.log(err);
});


app.listen(8008, () => {
    console.log('API 8008 启动');
});