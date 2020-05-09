webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail.tsx":
/*!**************************!*\
  !*** ./pages/detail.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.9.6@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/_antd@4.2.0@antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/_@babel_runtime@7.9.6@@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/_styled-jsx@3.2.5@styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.1@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.0@react-redux/es/index.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/utils.js */ "./server/utils.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_server_utils_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./actions/index.tsx");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Markdown */ "./components/Markdown.tsx");
/* harmony import */ var _components_Issues__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Issues */ "./components/Issues.tsx");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SearchUser */ "./components/SearchUser.tsx");





var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








var Detail = function Detail(_ref) {
  var _userRepo$owner, _userRepo$owner2, _userRepo$owner3;

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref);

  var userRepo = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.detail.user_repo;
  });
  var repoReadme = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.detail.repo_readme;
  });
  var repoIssues = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.detail.repo_issues;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      value = _useState[0],
      setValue = _useState[1];

  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (value) {
    setValue(value);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1988351315" + " " + "root"
  }, __jsx("div", {
    className: "jsx-1988351315" + " " + "head"
  }, __jsx("img", {
    src: (_userRepo$owner = userRepo.owner) === null || _userRepo$owner === void 0 ? void 0 : _userRepo$owner.avatar_url,
    alt: "",
    className: "jsx-1988351315" + " " + "head-img"
  }), __jsx("span", {
    className: "jsx-1988351315" + " " + "head-login"
  }, (_userRepo$owner2 = userRepo.owner) === null || _userRepo$owner2 === void 0 ? void 0 : _userRepo$owner2.login), __jsx("a", {
    className: "jsx-1988351315" + " " + "head-name"
  }, "".concat(userRepo.name, " / ").concat((_userRepo$owner3 = userRepo.owner) === null || _userRepo$owner3 === void 0 ? void 0 : _userRepo$owner3.login))), __jsx("div", {
    className: "jsx-1988351315" + " " + "content"
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a, {
    defaultActiveKey: "0",
    animated: false
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane, {
    tab: "\u6587\u6863",
    key: "0"
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
    content: repoReadme.content,
    isBase64: true
  })), __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane, {
    tab: "\u8BA8\u8BBA",
    key: "1"
  }, __jsx(_components_SearchUser__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: value,
    onChange: onChange
  }), repoIssues.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "jsx-1988351315" + " " + "issue"
    }, __jsx(_components_Issues__WEBPACK_IMPORTED_MODULE_9__["default"], {
      issues: item
    }));
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1988351315"
  }, ".root.jsx-1988351315{height:100%;overflow-y:auto;}.head.jsx-1988351315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;}.head-img.jsx-1988351315{width:30px;height:30px;}.head-login.jsx-1988351315{color:#666;margin:0 10px;}.head-name.jsx-1988351315{font-weight:500;}.content.jsx-1988351315{margin-right:20px;}.issue.jsx-1988351315:hover{border-top:1px solid #6739b6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxwYWdlc1xcZGV0YWlsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGtCLEFBR3VCLEFBSUMsQUFLRixBQUlBLEFBSUssQUFHRSxBQUdXLFdBYmpCLEFBSUUsQ0FiRSxJQWlCbEIsRUFHQSxLQVZBLEVBSUEsR0FiQSxDQXNCQSw2Q0FuQnFCLDZGQUNKLGVBQ2pCIiwiZmlsZSI6IkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxwYWdlc1xcZGV0YWlsLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYnMgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBnZXRBcGlEYXRhIH0gZnJvbSAnLi4vc2VydmVyL3V0aWxzLmpzJztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvTWFya2Rvd24nO1xyXG5pbXBvcnQgSXNzdWVzIGZyb20gJy4uL2NvbXBvbmVudHMvSXNzdWVzJztcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFMge1xyXG4gIGRldGFpbDoge1xyXG4gICAgdXNlcl9yZXBvPzoge1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgIG93bmVyOiB7XHJcbiAgICAgICAgYXZhdGFyX3VybDogc3RyaW5nO1xyXG4gICAgICAgIGxvZ2luOiBzdHJpbmc7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmVwb19yZWFkbWU/OiB7XHJcbiAgICAgIGNvbnRlbnQ6IGFueTtcclxuICAgIH07XHJcbiAgICByZXBvX2lzc3VlczogYW55O1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbCA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJSZXBvID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTKSA9PiBzdGF0ZS5kZXRhaWwudXNlcl9yZXBvKTtcclxuICBjb25zdCByZXBvUmVhZG1lID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTKSA9PiBzdGF0ZS5kZXRhaWwucmVwb19yZWFkbWUpO1xyXG4gIGNvbnN0IHJlcG9Jc3N1ZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFMpID0+IHN0YXRlLmRldGFpbC5yZXBvX2lzc3Vlcyk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUodmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3VzZXJSZXBvLm93bmVyPy5hdmF0YXJfdXJsfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJoZWFkLWltZ1wiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkLWxvZ2luXCI+e3VzZXJSZXBvLm93bmVyPy5sb2dpbn08L3NwYW4+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkLW5hbWVcIj57YCR7dXNlclJlcG8ubmFtZX0gLyAke3VzZXJSZXBvLm93bmVyPy5sb2dpbn1gfTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLmlofmoaNcIiBrZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgPE1hcmtkb3duIGNvbnRlbnQ9e3JlcG9SZWFkbWUuY29udGVudH0gaXNCYXNlNjQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuiuqOiuulwiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICA8U2VhcmNoVXNlciB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICB7cmVwb0lzc3Vlcy5tYXAoKGl0ZW06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxJc3N1ZXMgaXNzdWVzPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWQtaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZC1sb2dpbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZC1uYW1lIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjczOWI2O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgc3RvcmUsIHF1ZXJ5IH0gPSBjdHg7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gcXVlcnk7XHJcblxyXG4gIGNvbnN0IGRldGFpbFVzZXJSZXBvRGF0YSA9IGF3YWl0IGdldEFwaURhdGEoY3R4LCBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX1gKTtcclxuICBzdG9yZS5kaXNwYXRjaChhY3Rpb25zLmdldERldGFpbFJlcG9zKGRldGFpbFVzZXJSZXBvRGF0YSkpO1xyXG5cclxuICBjb25zdCBkZXRhaWxSZXBvc1JlYWRtZURhdGEgPSBhd2FpdCBnZXRBcGlEYXRhKFxyXG4gICAgY3R4LFxyXG4gICAgYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L3JlYWRtZWBcclxuICApO1xyXG4gIHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZ2V0UmVwb1JlYWRtZShkZXRhaWxSZXBvc1JlYWRtZURhdGEpKTtcclxuXHJcbiAgY29uc3QgZGV0YWlsVXNlcklzc3Vlc0RhdGEgPSBhd2FpdCBnZXRBcGlEYXRhKFxyXG4gICAgY3R4LFxyXG4gICAgYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcclxuICApO1xyXG4gIHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZ2V0UmVwb0lzc3VlcyhkZXRhaWxVc2VySXNzdWVzRGF0YSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\360Downloads\\\\Vscode\\\\program\\\\Next-Github-App\\\\pages\\\\detail.tsx */"));
};

Detail.getInitialProps = function _callee(_ref2) {
  var ctx, store, query, owner, name, detailUserRepoData, detailReposReadmeData, detailUserIssuesData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx = _ref2.ctx;
          store = ctx.store, query = ctx.query;
          owner = query.owner, name = query.name;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_6__["getApiData"])(ctx, "/repos/".concat(owner, "/").concat(name)));

        case 5:
          detailUserRepoData = _context.sent;
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["getDetailRepos"](detailUserRepoData));
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_6__["getApiData"])(ctx, "/repos/".concat(owner, "/").concat(name, "/readme")));

        case 9:
          detailReposReadmeData = _context.sent;
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["getRepoReadme"](detailReposReadmeData));
          _context.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_6__["getApiData"])(ctx, "/repos/".concat(owner, "/").concat(name, "/issues")));

        case 13:
          detailUserIssuesData = _context.sent;
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["getRepoIssues"](detailUserIssuesData));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ })

})
//# sourceMappingURL=detail.js.258ea3384f26b530dc04.hot-update.js.map