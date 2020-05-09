const { CLIENT_ID, CLIENT_SECRET, TOKEN_URL } = require('../config');

module.exports = (server) => {
  server.use(async (ctx, next) => {
    let { path } = ctx;
    if (path === '/auth') {
      const code = ctx.query.code;
      if (!code) return;
      const tokenResult = await axios({
        method: 'POST',
        url: TOKEN_URL,
        data: {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      });
      if (tokenResult.status === 200 && !tokenResult.data.error) {
        // token 存入 session
        ctx.session.oauth = tokenResult.data;
        const { access_token, token_type } = tokenResult.data;
        const userResult = await axios({
          method: 'GET',
          url: USER_URL,
          headers: {
            Authorization: `${token_type} ${access_token}`,
          },
        }).catch((err) => {});
        if (userResult) {
          // 用户信息存入 session
          ctx.session.userInfo = userResult.data;
          // 回到验证前的页面路径
          const url = ctx.session.prepareOauthUrl;
          ctx.redirect(url ? url : '/');
        } else {
          ctx.body = 'get userinfo fail';
        }
      } else {
        ctx.body = 'get token fail';
      }
    } else {
      await next();
    }
  });
};
