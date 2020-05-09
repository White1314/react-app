webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail.tsx":
/*!**************************!*\
  !*** ./pages/detail.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/_antd@4.2.0@antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.9.6@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/_styled-jsx@3.2.5@styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.1@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.0@react-redux/es/index.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/utils.js */ "./server/utils.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./actions/index.tsx");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Markdown */ "./components/Markdown.tsx");
/* harmony import */ var _components_Issues__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Issues */ "./components/Issues.tsx");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SearchUser */ "./components/SearchUser.tsx");




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Detail = function Detail(_ref) {
  var _userRepo$owner, _userRepo$owner2, _userRepo$owner3;

  var owner = _ref.owner,
      name = _ref.name;
  var userRepo = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.detail.user_repo;
  });
  var repoReadme = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.detail.repo_readme;
  });
  var repoIssues = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.detail.repo_issues;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(repoIssues),
      issues = _useState[0],
      setIssues = _useState[1]; // 父组件执行筛选用户的操作


  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function _callee(value) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__["getApiData"])(null, "/repos/".concat(owner, "/").concat(name, "/issues?creator=").concat(value)));

          case 2:
            data = _context.sent;
            data.length ? setIssues(data) : null;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
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
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a, {
    defaultActiveKey: "0",
    animated: false
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a.TabPane, {
    tab: "\u6587\u6863",
    key: "0"
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: repoReadme.content,
    isBase64: true
  })), __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a.TabPane, {
    tab: "\u8BA8\u8BBA",
    key: "1"
  }, __jsx(_components_SearchUser__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onChange: onChange
  }), issues.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "jsx-1988351315" + " " + "issue"
    }, __jsx(_components_Issues__WEBPACK_IMPORTED_MODULE_8__["default"], {
      issues: item
    }));
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1988351315"
  }, ".root.jsx-1988351315{height:100%;overflow-y:auto;}.head.jsx-1988351315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;}.head-img.jsx-1988351315{width:30px;height:30px;}.head-login.jsx-1988351315{color:#666;margin:0 10px;}.head-name.jsx-1988351315{font-weight:500;}.content.jsx-1988351315{margin-right:20px;}.issue.jsx-1988351315:hover{border-top:1px solid #6739b6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxwYWdlc1xcZGV0YWlsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBR3VCLEFBSUMsQUFLRixBQUlBLEFBSUssQUFHRSxBQUdXLFdBYmpCLEFBSUUsQ0FiRSxJQWlCbEIsRUFHQSxLQVZBLEVBSUEsR0FiQSxDQXNCQSw2Q0FuQnFCLDZGQUNKLGVBQ2pCIiwiZmlsZSI6IkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxwYWdlc1xcZGV0YWlsLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYnMgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBnZXRBcGlEYXRhIH0gZnJvbSAnLi4vc2VydmVyL3V0aWxzLmpzJztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvTWFya2Rvd24nO1xyXG5pbXBvcnQgSXNzdWVzIGZyb20gJy4uL2NvbXBvbmVudHMvSXNzdWVzJztcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFMge1xyXG4gIGRldGFpbDoge1xyXG4gICAgdXNlcl9yZXBvPzoge1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgIG93bmVyPzoge1xyXG4gICAgICAgIGF2YXRhcl91cmw6IHN0cmluZztcclxuICAgICAgICBsb2dpbjogc3RyaW5nO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJlcG9fcmVhZG1lPzoge1xyXG4gICAgICBjb250ZW50OiBhbnk7XHJcbiAgICB9O1xyXG4gICAgcmVwb19pc3N1ZXM6IGFueTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWwgPSAoeyBvd25lciwgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgdXNlclJlcG8gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFMpID0+IHN0YXRlLmRldGFpbC51c2VyX3JlcG8pO1xyXG4gIGNvbnN0IHJlcG9SZWFkbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFMpID0+IHN0YXRlLmRldGFpbC5yZXBvX3JlYWRtZSk7XHJcbiAgY29uc3QgcmVwb0lzc3VlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUykgPT4gc3RhdGUuZGV0YWlsLnJlcG9faXNzdWVzKTtcclxuXHJcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKHJlcG9Jc3N1ZXMpO1xyXG5cclxuICAvLyDniLbnu4Tku7bmiafooYznrZvpgInnlKjmiLfnmoTmk43kvZxcclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFwaURhdGEoXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXM/Y3JlYXRvcj0ke3ZhbHVlfWBcclxuICAgICk7XHJcbiAgICBkYXRhLmxlbmd0aCA/IHNldElzc3VlcyhkYXRhKSA6IG51bGw7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dXNlclJlcG8ub3duZXI/LmF2YXRhcl91cmx9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImhlYWQtaW1nXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWQtbG9naW5cIj57dXNlclJlcG8ub3duZXI/LmxvZ2lufTwvc3Bhbj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWQtbmFtZVwiPntgJHt1c2VyUmVwby5uYW1lfSAvICR7dXNlclJlcG8ub3duZXI/LmxvZ2lufWB9PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjBcIiBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuaWh+aho1wiIGtleT1cIjBcIj5cclxuICAgICAgICAgICAgICA8TWFya2Rvd24gY29udGVudD17cmVwb1JlYWRtZS5jb250ZW50fSBpc0Jhc2U2ND17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi6K6o6K66XCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hVc2VyIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICB7aXNzdWVzLm1hcCgoaXRlbTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPElzc3VlcyBpc3N1ZXM9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290IHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZC1pbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkLWxvZ2luIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkLW5hbWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2NzM5YjY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyBzdG9yZSwgcXVlcnkgfSA9IGN0eDtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBxdWVyeTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGF3YWl0IGdldEFwaURhdGEoY3R4LCBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX1gKSxcclxuICAgIGF3YWl0IGdldEFwaURhdGEoY3R4LCBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vcmVhZG1lYCksXHJcbiAgICBhd2FpdCBnZXRBcGlEYXRhKGN0eCwgYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2ApLFxyXG4gIF0pO1xyXG5cclxuICBzdG9yZS5kaXNwYXRjaChhY3Rpb25zLmdldERldGFpbFJlcG9zKGRhdGFbMF0pKTtcclxuICBzdG9yZS5kaXNwYXRjaChhY3Rpb25zLmdldFJlcG9SZWFkbWUoZGF0YVsxXSkpO1xyXG4gIHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZ2V0UmVwb0lzc3VlcyhkYXRhWzJdKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBvd25lcixcclxuICAgIG5hbWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcclxuIl19 */\n/*@ sourceURL=D:\\\\360Downloads\\\\Vscode\\\\program\\\\Next-Github-App\\\\pages\\\\detail.tsx */"));
};

Detail.getInitialProps = function _callee2(_ref2) {
  var ctx, store, query, owner, name, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ctx = _ref2.ctx;
          store = ctx.store, query = ctx.query;
          owner = query.owner, name = query.name;
          _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a;
          _context2.t1 = Promise;
          _context2.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__["getApiData"])(ctx, "/repos/".concat(owner, "/").concat(name)));

        case 7:
          _context2.t2 = _context2.sent;
          _context2.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__["getApiData"])(ctx, "/repos/".concat(owner, "/").concat(name, "/readme")));

        case 10:
          _context2.t3 = _context2.sent;
          _context2.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__["getApiData"])(ctx, "/repos/".concat(owner, "/").concat(name, "/issues")));

        case 13:
          _context2.t4 = _context2.sent;
          _context2.t5 = [_context2.t2, _context2.t3, _context2.t4];
          _context2.t6 = _context2.t1.all.call(_context2.t1, _context2.t5);
          _context2.next = 18;
          return _context2.t0.awrap.call(_context2.t0, _context2.t6);

        case 18:
          data = _context2.sent;
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["getDetailRepos"](data[0]));
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["getRepoReadme"](data[1]));
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["getRepoIssues"](data[2]));
          return _context2.abrupt("return", {
            owner: owner,
            name: name
          });

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ })

})
//# sourceMappingURL=detail.js.441b8600009d1ad097d6.hot-update.js.map