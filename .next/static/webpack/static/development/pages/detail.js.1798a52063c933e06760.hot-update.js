webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./server/utils.js":
/*!*************************!*\
  !*** ./server/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./server/node_modules/_@babel_runtime@7.9.6@@babel/runtime/regenerator/index.js");

var axios = __webpack_require__(/*! axios */ "./server/node_modules/_axios@0.19.2@axios/index.js");

var atob = __webpack_require__(/*! atob */ "./server/node_modules/_atob@2.1.2@atob/browser-atob.js");

global.atob = atob;
var BASE_URL = 'https://api.github.com';

var getApiData = function getApiData(ctx, path) {
  var isServer, result, data, _ref, oauth, _ref2, token_type, access_token, headers, _result, _data;

  return _regeneratorRuntime.async(function getApiData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 判断当前为请求环境为服务端还是客户端（网页刷新和链接跳转）
          isServer = false; // 客户端请求没有 session (ctx.req.session)，需代理到服务器上

          if (isServer) {
            _context.next = 11;
            break;
          }

          // 转发到客户端
          url = "/api".concat(path);
          _context.next = 5;
          return _regeneratorRuntime.awrap(axios({
            url: url
          }));

        case 5:
          result = _context.sent;
          data = result ? result.data : [];
          console.log(data);
          return _context.abrupt("return", data);

        case 11:
          url = "".concat(BASE_URL).concat(path); // 服务端可直接获取 session

          _ref = ctx.session || '', oauth = _ref.oauth;
          _ref2 = oauth ? oauth : {}, token_type = _ref2.token_type, access_token = _ref2.access_token;
          headers = oauth ? {
            Authorization: "".concat(token_type, " ").concat(access_token)
          } : {};
          _context.next = 17;
          return _regeneratorRuntime.awrap(axios({
            url: url,
            method: 'get',
            headers: headers
          })["catch"](function (err) {}));

        case 17:
          _result = _context.sent;
          console.log('服务端获取数据成功');
          _data = _result ? _result.data : [];
          return _context.abrupt("return", _data);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

module.exports = {
  getApiData: getApiData
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.43.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.43.0@webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=detail.js.1798a52063c933e06760.hot-update.js.map