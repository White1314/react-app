const axios = require('axios');
const atob = require('atob');

global.atob = atob;

const BASE_URL = 'https://api.github.com';

const getApiData = async (ctx, path) => {
  // 判断当前为请求环境为服务端还是客户端（网页刷新和链接跳转）
  let isServer = typeof window === 'undefined';

  // 客户端请求没有 session (ctx.req.session)，需代理到服务器上
  if (!isServer) {
    // 转发到客户端
    url = `/api${path}`;
    const result = await axios({ url });
    let data = result ? result.data : [];
    console.log(data);
    return data;
  } else {
    url = `${BASE_URL}${path}`;
    // 服务端可直接获取 session
    const { oauth } = ctx.session || '';
    const { token_type, access_token } = oauth ? oauth : {};
    let headers = oauth
      ? {
          Authorization: `${token_type} ${access_token}`,
        }
      : {};
    const result = await axios({
      url,
      method: 'get',
      headers,
    }).catch((err) => {});
    console.log('服务端获取数据成功');
    let data = result ? result.data : [];
    return data;
  }
};

module.exports = {
  getApiData,
};
