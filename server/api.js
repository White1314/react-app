const { getApiData } = require('./utils.js');

module.exports = (server) => {
  server.use(async (ctx, next) => {
    let { path, url } = ctx;
    if (path.startsWith('/api')) {
      url = url.replace('/api/', '/');
      console.log(url);
      const data = (await getApiData(ctx, url)) || [];
      ctx.body = data;
    } else {
      await next();
    }
  });
};
