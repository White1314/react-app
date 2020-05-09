const SCOPE = 'user';
const CLIENT_ID = 'c422829926c86ed64a91';
const CLIENT_SECRET = '53f09fa548201825683d6e5598a816eea17eb58e';
// 'https://github.com/login/oauth/authorize?client_id=c422829926c86ed64a91&scope=user'
//const OAUTH_URL = `${BASE_URL}?client_id=${CLIENT_ID}&scope=${SCOPE}`;
const OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
const TOKEN_URL = 'https://github.com/login/oauth/access_token';
/*
const USER_URL = 'https://api.github.com/user';
// 用户的仓库
const USER_REPOSITY_URL = 'https://api.github.com/user/repos';
// 用户收藏的仓库
const USER_STAR_URL = 'https://api.github.com/user/starred';
// 搜索仓库
const SEARCH_REPOSITY_URL = 'https://api.github.com/search/repositories';
// 仓库详情
// /repos/:owner/:repo
const REPOSITY_DETAIL_URL = 'https://api.github.com/repos';
*/
module.exports = {
  CLIENT_ID,
  CLIENT_SECRET,
  OAUTH_URL,
  TOKEN_URL,
};
