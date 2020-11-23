const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const session = require('koa-session');
const atob = require('atob');

const api = require('./api');
const oauth = require('./oauth');
//const { CLIENT_ID, CLIENT_SECRET, TOKEN_URL } = require('../config');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();
const successInfo = (msg, data = []) => ({ code: 0, msg, data });

global.atob = atob;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  const CONFIG = {
    key: 'white-next-app',
    //store: {}
  };

  // 缓存 oathu 之前的路由
  router.post('/prepareOauth', async (ctx) => {
    const { url } = ctx.query;
    ctx.session.prepareOauthUrl = url;
    ctx.body = successInfo('准备验证OAuth', {});
  });

  // 用户退出
  router.post('/userout', async (ctx) => {
    ctx.session = null;
    ctx.body = successInfo('退出成功', {});
  });

  server.keys = ['app keys'];

  server.use(session(CONFIG, server));

  // 中间件
  oauth(server);
  api(server);

  server.use(router.routes());

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.listen(3001, function () {
    console.log('node app start at port 3001');
  });
});
