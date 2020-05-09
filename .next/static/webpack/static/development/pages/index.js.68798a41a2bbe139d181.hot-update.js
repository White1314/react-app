webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.9.6@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/_antd@4.2.0@antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/_antd@4.2.0@antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/_styled-jsx@3.2.5@styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.1@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.0@react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/_@ant-design_icons@4.1.0@@ant-design/icons/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./actions/index.tsx");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../server/utils.js */ "./server/utils.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_server_utils_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.tsx");





var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
 //import Link from 'next/link';


 //import post from '../axios';





var Index = function Index() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      id = _useSelector.id,
      avatar_url = _useSelector.avatar_url,
      login = _useSelector.login,
      name = _useSelector.name,
      bio = _useSelector.bio,
      email = _useSelector.email;

  var userRepo = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.home.user_repo;
  });
  var userStarredRepo = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.home.user_starred_repo;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, !id ? __jsx("div", {
    className: "jsx-3032191151" + " " + "root"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "primary",
    href: _config_js__WEBPACK_IMPORTED_MODULE_9__["OAUTH_URL"]
  }, "\u70B9\u51FB\u767B\u5F55")) : __jsx("div", {
    style: {
      display: 'flex',
      height: '100%'
    },
    className: "jsx-3032191151"
  }, __jsx("div", {
    className: "jsx-3032191151" + " " + "user-info"
  }, __jsx("img", {
    src: avatar_url,
    alt: "",
    className: "jsx-3032191151" + " " + "avatar"
  }), __jsx("span", {
    className: "jsx-3032191151" + " " + "login"
  }, login), name ? __jsx("span", {
    className: "jsx-3032191151" + " " + "name"
  }, name) : null, bio ? __jsx("span", {
    className: "jsx-3032191151" + " " + "bio"
  }, bio) : null, email ? __jsx("p", {
    className: "jsx-3032191151" + " " + "email"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["MailOutlined"], {
    style: {
      marginRight: 10
    }
  }), __jsx("a", {
    href: "mailto:".concat(email),
    className: "jsx-3032191151"
  }, email)) : null), __jsx("div", {
    className: "jsx-3032191151" + " " + "user-repo"
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a, {
    defaultActiveKey: "0",
    animated: false
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane, {
    tab: "\u4F60\u7684\u4ED3\u5E93",
    key: "0"
  }, userRepo.map(function (item) {
    return __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      repo: item,
      key: item.id
    });
  })), __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane, {
    tab: "\u6536\u85CF\u7684\u4ED3\u5E93",
    key: "1"
  }, userStarredRepo.map(function (item) {
    return __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      repo: item,
      key: item.id
    });
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3032191151"
  }, ".root.jsx-3032191151{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.user-info.jsx-3032191151{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.avatar.jsx-3032191151{width:100%;border-radius:5px;}.login.jsx-3032191151{font-weight:300;font-size:20px;margin-top:20px;color:#666;}.name.jsx-3032191151{margin-top:20px;font-size:16px;color:#777;}.bio.jsx-3032191151{margin-top:20px;color:#333;}.email.jsx-3032191151{margin-top:20px;}.user-repo.jsx-3032191151{width:100%;height:100%;overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxwYWdlc1xcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFUyxBQUd3QixBQU9DLEFBT0QsQUFJSyxBQU1BLEFBS0EsQUFJQSxBQUdMLFdBbkNDLEFBY00sQUFzQk4sQ0E3Qk0sSUFXSCxBQU1BLEFBS0osQUFJYixPQWhDZSxBQW9DQyxJQVBoQixFQWZBLENBUGdCLENBV0UsQUFNTCxNQWFiLEtBWkEsS0FOYSxXQUNiLDRCQVplLFdBUFUsK0RBUUQsb0NBUEgsMENBUXJCLG1EQVBBIiwiZmlsZSI6IkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJzIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IE1haWxPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XHJcbi8vaW1wb3J0IHBvc3QgZnJvbSAnLi4vYXhpb3MnO1xyXG5pbXBvcnQgeyBnZXRBcGlEYXRhIH0gZnJvbSAnLi4vc2VydmVyL3V0aWxzLmpzJztcclxuaW1wb3J0IHsgT0FVVEhfVVJMIH0gZnJvbSAnLi4vY29uZmlnLmpzJztcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcclxuXHJcbmludGVyZmFjZSB1c2VyU3RhdGUge1xyXG4gIHVzZXI6IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBhdmF0YXJfdXJsOiBzdHJpbmc7XHJcbiAgICBsb2dpbjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYmlvOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBob21lU3RhdGUge1xyXG4gIGhvbWU6IHtcclxuICAgIHVzZXJfcmVwbzogYW55O1xyXG4gICAgdXNlcl9zdGFycmVkX3JlcG86IGFueTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCB7IGlkLCBhdmF0YXJfdXJsLCBsb2dpbiwgbmFtZSwgYmlvLCBlbWFpbCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IHVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlclxyXG4gICk7XHJcbiAgY29uc3QgdXNlclJlcG8gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGhvbWVTdGF0ZSkgPT4gc3RhdGUuaG9tZS51c2VyX3JlcG8pO1xyXG4gIGNvbnN0IHVzZXJTdGFycmVkUmVwbyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBob21lU3RhdGUpID0+IHN0YXRlLmhvbWUudXNlcl9zdGFycmVkX3JlcG9cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IWlkID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e09BVVRIX1VSTH0+XHJcbiAgICAgICAgICAgIOeCueWHu+eZu+W9lVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhcl91cmx9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e2xvZ2lufTwvc3Bhbj5cclxuICAgICAgICAgICAge25hbWUgPyA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e25hbWV9PC9zcGFuPiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtiaW8gPyA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57YmlvfTwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICAgICAgICB7ZW1haWwgPyAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxNYWlsT3V0bGluZWQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+e2VtYWlsfTwvYT5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjBcIiBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt1c2VyUmVwby5tYXAoKGl0ZW06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e2l0ZW19IGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5pS26JeP55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICB7dXNlclN0YXJyZWRSZXBvLm1hcCgoaXRlbTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLXJlcG8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyBzdG9yZSB9ID0gY3R4O1xyXG5cclxuICAvLyDmn6XnnIvnlKjmiLfku5PlupPkv6Hmga/pnIDlhYjnmbvlvZVcclxuICBjb25zdCBpZCA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5pZDtcclxuICBpZiAoIWlkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8vIOS/oeaBr+e8k+WtmOWcqCByZWR1eFxyXG4gIGNvbnN0IGRhdGEgPSBQcm9taXNlLmFsbChbXHJcbiAgICBhd2FpdCBnZXRBcGlEYXRhKGN0eCwgJy91c2VyL3JlcG9zJyksXHJcbiAgICBhd2FpdCBnZXRBcGlEYXRhKGN0eCwgJy91c2VyL3N0YXJyZWQnKSxcclxuICBdKTtcclxuXHJcbiAgc3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5nZXRVc2VyUmVwb3MoZGF0YVswXSkpO1xyXG4gIHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZ2V0VXNlclN0YXJyZWRSZXBvcyhkYXRhWzFdKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=D:\\\\360Downloads\\\\Vscode\\\\program\\\\Next-Github-App\\\\pages\\\\index.tsx */"));
};

Index.getInitialProps = function _callee(_ref) {
  var ctx, store, id, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx = _ref.ctx;
          store = ctx.store; // 查看用户仓库信息需先登录

          id = store.getState().user.id;

          if (id) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return");

        case 5:
          _context.t0 = Promise;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_8__["getApiData"])(ctx, '/user/repos'));

        case 8:
          _context.t1 = _context.sent;
          _context.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_8__["getApiData"])(ctx, '/user/starred'));

        case 11:
          _context.t2 = _context.sent;
          _context.t3 = [_context.t1, _context.t2];
          data = _context.t0.all.call(_context.t0, _context.t3);
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["getUserRepos"](data[0]));
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["getUserStarredRepos"](data[1]));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.68798a41a2bbe139d181.hot-update.js.map