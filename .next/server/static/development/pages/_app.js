module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./actions/index.tsx":
/*!***************************!*\
  !*** ./actions/index.tsx ***!
  \***************************/
/*! exports provided: getUserInfo, userLoginOut, userPrepareOauth, getUserRepos, getUserStarredRepos, getSearchRepos, getDetailRepos, getRepoReadme, getRepoIssues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLoginOut", function() { return userLoginOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPrepareOauth", function() { return userPrepareOauth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRepos", function() { return getUserRepos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserStarredRepos", function() { return getUserStarredRepos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchRepos", function() { return getSearchRepos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailRepos", function() { return getDetailRepos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepoReadme", function() { return getRepoReadme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepoIssues", function() { return getRepoIssues; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./constants/index.tsx");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../axios */ "./axios/index.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);




const setUserInfo = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_USER_INFO"],
  payload
});

const getUserInfo = payload => {
  return dispatch => {
    dispatch(setUserInfo(payload));
  };
};

const setLoginOut = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_OUT"]
});

const userLoginOut = () => {
  return async dispatch => {
    const data = await Object(_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      url: '/userout'
    });
    data ? dispatch(setLoginOut()) : '';
  };
};
const userPrepareOauth = async path => {
  const data = await Object(_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: `/prepareOauth?url=${path}`
  });
  data ? location.href = _config__WEBPACK_IMPORTED_MODULE_2__["OAUTH_URL"] : null;
};

const setUserRepos = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_USER_REPOS"],
  payload
});

const getUserRepos = payload => {
  return async dispatch => {
    dispatch(setUserRepos(payload));
  };
};

const setUserStarredRepos = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_USER_STARRED_REPOS"],
  payload
});

const getUserStarredRepos = payload => {
  return async dispatch => {
    dispatch(setUserStarredRepos(payload));
  };
};

const setSearchRepos = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_SEARCH_REPOS"],
  payload
});

const getSearchRepos = payload => {
  return async dispatch => {
    dispatch(setSearchRepos(payload));
  };
};

const setDetailRepos = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_USER_REPOS"],
  payload
});

const getDetailRepos = payload => {
  return async dispatch => {
    dispatch(setDetailRepos(payload));
  };
};

const setRepoReadme = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_REPO_README"],
  payload
});

const getRepoReadme = payload => {
  return async dispatch => {
    dispatch(setRepoReadme(payload));
  };
};

const setRepoIssues = payload => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_REPO_ISSUES"],
  payload
});

const getRepoIssues = payload => {
  return async dispatch => {
    dispatch(setRepoIssues(payload));
  };
};

/***/ }),

/***/ "./axios/index.tsx":
/*!*************************!*\
  !*** ./axios/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (options => {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      url: options.url,
      method: 'post',
      data: options.data
    }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        // 后台数据
        resolve(res.data.data);
      } else if (res.status === 200 && !res.data.code) {
        // api 数据
        resolve(res.data);
      } else {
        reject('error');
      }
    }).catch(err => {
      resolve(err);
    });
  });
});

/***/ }),

/***/ "./components/LayOut.tsx":
/*!*******************************!*\
  !*** ./components/LayOut.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions */ "./actions/index.tsx");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/_antd@4.2.0@antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






const {
  Header,
  Content,
  Footer
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a;
const {
  Search
} = antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a;
const GithubOutlinedStyle = {
  color: 'white',
  fontSize: 40
};

const LayOut = ({
  children,
  router
}) => {
  const initalSearchValue = router.query && router.query.value;
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const {
    0: searchValue,
    1: setSearchVaule
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initalSearchValue);
  const handleOnchange = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(e => {
    setSearchVaule(e.target.value);
  }, []);
  const handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(() => {
    router.push(`/search?q=${searchValue}`);
  }, [searchValue]);
  const handlePrepareOauth = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(() => {
    _actions__WEBPACK_IMPORTED_MODULE_11__["userPrepareOauth"](router.asPath);
  }, []);
  const handleLoginOut = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(() => {
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["userLoginOut"]());
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(Header, null, __jsx("div", {
    className: "jsx-1273995273" + " " + "header-wrapper"
  }, __jsx("div", {
    className: "jsx-1273995273" + " " + "header-left header-item"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["GithubOutlined"], {
    style: GithubOutlinedStyle
  })), __jsx("div", {
    className: "jsx-1273995273" + " " + "header-center header-item"
  }, __jsx(Search, {
    value: searchValue,
    onChange: handleOnchange,
    onSearch: handleOnSearch,
    placeholder: "\u641C\u7D22\u4ED3\u5E93"
  })), __jsx("div", {
    className: "jsx-1273995273" + " " + "header-right header-item"
  }, user.id ? __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    overlay: __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, __jsx("a", {
      href: "javascipt: void(0)",
      onClick: handleLoginOut,
      className: "jsx-1273995273"
    }, "\u9000\u51FA")))
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    src: user.avatar_url
  })) : __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "\u70B9\u51FB\u767B\u5F55"
  }, __jsx("a", {
    href: "javascipt: void(0)",
    onClick: handlePrepareOauth,
    className: "jsx-1273995273"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutlined"], null)
  })))))), __jsx(Content, null, __jsx("div", {
    className: "jsx-1273995273" + " " + "content-wrapper"
  }, children)), __jsx(Footer, {
    style: {
      textAlign: 'center'
    }
  }, "MyGithub \xA92020 Created by White")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2422381672"
  }, ".header-wrapper.jsx-1273995273{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-item.jsx-1273995273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-center.jsx-1273995273{width:30%;margin-left:20px;margin-right:auto;}.content-wrapper.jsx-1273995273{position:absolute;width:100%;height:100%;padding:20px;padding-bottom:0;background:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxjb21wb25lbnRzXFxMYXlPdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHUyxBQUd3QixBQU1FLEFBSUgsQUFLUSxVQUpELENBVkwsT0FlRCxLQWRFLElBVUssRUFLTixZQUNDLElBTGYsU0FNbUIsaUJBQ0QsR0FiRyxhQWNyQixVQWxCZ0Msc0VBS2hDLDZDQUpBIiwiZmlsZSI6IkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxjb21wb25lbnRzXFxMYXlPdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF5b3V0LCBJbnB1dCwgQXZhdGFyLCBUb29sdGlwLCBEcm9wZG93biwgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBHaXRodWJPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcblxyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuY29uc3QgR2l0aHViT3V0bGluZWRTdHlsZSA9IHsgY29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiA0MCB9O1xyXG5cclxuaW50ZXJmYWNlIFAge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XHJcbiAgcm91dGVyOiBSb3V0ZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTIHtcclxuICB1c2VyOiB7XHJcbiAgICBpZD86IG51bWJlcjtcclxuICAgIGF2YXRhcl91cmw/OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgTGF5T3V0OiBGQzxQPiA9ICh7IGNoaWxkcmVuLCByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IGluaXRhbFNlYXJjaFZhbHVlID0gcm91dGVyLnF1ZXJ5ICYmIHJvdXRlci5xdWVyeS52YWx1ZTtcclxuXHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUykgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmF1bGVdID0gdXNlU3RhdGUoaW5pdGFsU2VhcmNoVmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbmNoYW5nZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hWYXVsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoP3E9JHtzZWFyY2hWYWx1ZX1gKTtcclxuICB9LCBbc2VhcmNoVmFsdWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJlcGFyZU9hdXRoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgYWN0aW9ucy51c2VyUHJlcGFyZU9hdXRoKHJvdXRlci5hc1BhdGgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW5PdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhY3Rpb25zLnVzZXJMb2dpbk91dCgpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnQgaGVhZGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8R2l0aHViT3V0bGluZWQgc3R5bGU9e0dpdGh1Yk91dGxpbmVkU3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jZW50ZXIgaGVhZGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8U2VhcmNoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25jaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17aGFuZGxlT25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuaQnOe0ouS7k+W6k1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0IGhlYWRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAge3VzZXIuaWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgb3ZlcmxheT17XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjaXB0OiB2b2lkKDApXCIgb25DbGljaz17aGFuZGxlTG9naW5PdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOmAgOWHulxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gc3JjPXt1c2VyLmF2YXRhcl91cmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIueCueWHu+eZu+W9lVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjaXB0OiB2b2lkKDApXCIgb25DbGljaz17aGFuZGxlUHJlcGFyZU9hdXRofT5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0hlYWRlcj5cclxuXHJcbiAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgPEZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgTXlHaXRodWIgwqkyMDIwIENyZWF0ZWQgYnkgV2hpdGVcclxuICAgICAgICA8L0Zvb3Rlcj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5oZWFkZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkZXItaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGVyLWNlbnRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hbnQtbGF5b3V0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFudC1sYXlvdXQtaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjczOWI2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFudC1sYXlvdXQtY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFudC1sYXlvdXQtc2lkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMYXlPdXQpO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\360Downloads\\\\Vscode\\\\program\\\\Next-Github-App\\\\components\\\\LayOut.tsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2485462088"
  }, "#__next{height:100%;}.ant-layout{height:100%;}.ant-layout-header{padding:0 20px;background:#6739b6;}.ant-layout-content{position:relative;height:100%;}.ant-layout-sider{background:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxjb21wb25lbnRzXFxMYXlPdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRIUyxBQUd5QixBQUdBLEFBR0csQUFJRyxBQUlGLFlBYmxCLEFBR0EsR0FHcUIsQ0FRckIsRUFKYyxZQUNkLElBSkEiLCJmaWxlIjoiRDpcXDM2MERvd25sb2Fkc1xcVnNjb2RlXFxwcm9ncmFtXFxOZXh0LUdpdGh1Yi1BcHBcXGNvbXBvbmVudHNcXExheU91dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXlvdXQsIElucHV0LCBBdmF0YXIsIFRvb2x0aXAsIERyb3Bkb3duLCBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEdpdGh1Yk91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciwgUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5jb25zdCBHaXRodWJPdXRsaW5lZFN0eWxlID0geyBjb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDQwIH07XHJcblxyXG5pbnRlcmZhY2UgUCB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudDtcclxuICByb3V0ZXI6IFJvdXRlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFMge1xyXG4gIHVzZXI6IHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgYXZhdGFyX3VybD86IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBMYXlPdXQ6IEZDPFA+ID0gKHsgY2hpbGRyZW4sIHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc3QgaW5pdGFsU2VhcmNoVmFsdWUgPSByb3V0ZXIucXVlcnkgJiYgcm91dGVyLnF1ZXJ5LnZhbHVlO1xyXG5cclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYXVsZV0gPSB1c2VTdGF0ZShpbml0YWxTZWFyY2hWYWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uY2hhbmdlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFNlYXJjaFZhdWxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2g/cT0ke3NlYXJjaFZhbHVlfWApO1xyXG4gIH0sIFtzZWFyY2hWYWx1ZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmVwYXJlT2F1dGggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBhY3Rpb25zLnVzZXJQcmVwYXJlT2F1dGgocm91dGVyLmFzUGF0aCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbk91dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGFjdGlvbnMudXNlckxvZ2luT3V0KCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdCBoZWFkZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxHaXRodWJPdXRsaW5lZCBzdHlsZT17R2l0aHViT3V0bGluZWRTdHlsZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNlbnRlciBoZWFkZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbmNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5pCc57Si5LuT5bqTXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHQgaGVhZGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICB7dXNlci5pZCA/IChcclxuICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICBvdmVybGF5PXtcclxuICAgICAgICAgICAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NpcHQ6IHZvaWQoMClcIiBvbkNsaWNrPXtoYW5kbGVMb2dpbk91dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg6YCA5Ye6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBzcmM9e3VzZXIuYXZhdGFyX3VybH0gLz5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi54K55Ye755m75b2VXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NpcHQ6IHZvaWQoMClcIiBvbkNsaWNrPXtoYW5kbGVQcmVwYXJlT2F1dGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IGljb249ezxVc2VyT3V0bGluZWQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvSGVhZGVyPlxyXG5cclxuICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICA8Rm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICBNeUdpdGh1YiDCqTIwMjAgQ3JlYXRlZCBieSBXaGl0ZVxyXG4gICAgICAgIDwvRm9vdGVyPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmhlYWRlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlci1pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkZXItY2VudGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFudC1sYXlvdXQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW50LWxheW91dC1oZWFkZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NzM5YjY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW50LWxheW91dC1jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW50LWxheW91dC1zaWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExheU91dCk7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\360Downloads\\\\Vscode\\\\program\\\\Next-Github-App\\\\components\\\\LayOut.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(LayOut));

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

const SCOPE = 'user';
const CLIENT_ID = 'c422829926c86ed64a91';
const CLIENT_SECRET = '53f09fa548201825683d6e5598a816eea17eb58e'; // 'https://github.com/login/oauth/authorize?client_id=c422829926c86ed64a91&scope=user'
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
  TOKEN_URL
};

/***/ }),

/***/ "./constants/index.tsx":
/*!*****************************!*\
  !*** ./constants/index.tsx ***!
  \*****************************/
/*! exports provided: GET_USER_INFO, USER_PREPARE_OAUTH, USER_LOGIN_OUT, GET_USER_REPOS, GET_USER_STARRED_REPOS, GET_SEARCH_REPOS, GET_DETAIL_USER_REPOS, GET_REPO_README, GET_REPO_ISSUES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_INFO", function() { return GET_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PREPARE_OAUTH", function() { return USER_PREPARE_OAUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_OUT", function() { return USER_LOGIN_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_REPOS", function() { return GET_USER_REPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_STARRED_REPOS", function() { return GET_USER_STARRED_REPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCH_REPOS", function() { return GET_SEARCH_REPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_USER_REPOS", function() { return GET_DETAIL_USER_REPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REPO_README", function() { return GET_REPO_README; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REPO_ISSUES", function() { return GET_REPO_ISSUES; });
const GET_USER_INFO = 'GET_USER_INFO';
const USER_PREPARE_OAUTH = 'USER_PREPARE_OAUTH';
const USER_LOGIN_OUT = 'USER_LOGIN_OUT';
const GET_USER_REPOS = 'GET_USER_REPOS';
const GET_USER_STARRED_REPOS = 'GET_USER_STAR_REPOS';
const GET_SEARCH_REPOS = 'GET_SEARCH_REPOS';
const GET_DETAIL_USER_REPOS = 'GET_DETAIL_USER_REPOS';
const GET_REPO_README = 'GET_REPO_README';
const GET_REPO_ISSUES = 'GET_REPO_ISSUES';

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/interopRequireDefault.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/interopRequireDefault.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/_antd@4.2.0@antd/dist/antd.css":
/*!*****************************************************!*\
  !*** ./node_modules/_antd@4.2.0@antd/dist/antd.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/_next@9.3.6@next/app.js":
/*!**********************************************!*\
  !*** ./node_modules/_next@9.3.6@next/app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/_next@9.3.6@next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/_next@9.3.6@next/dist/pages/_app.js":
/*!**********************************************************!*\
  !*** ./node_modules/_next@9.3.6@next/dist/pages/_app.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/_next@9.3.6@next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_LayOut__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LayOut */ "./components/LayOut.tsx");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ "./reducers/index.tsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "startLoading", () => {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.loading('');
    });

    _defineProperty(this, "stopLoading", () => {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.destroy();
    });
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    // 全局获取session里的用户数据

    /*
    let { store } = ctx;
    let session = ctx.req.session;
    let userInfo = session ? session.userInfo : {};
    if (!store.getState().user.id) {
      store.dispatch(actions.getUserInfo(userInfo));
    }
    */
    let pageProps = Component.getInitialProps ? await Component.getInitialProps({
      ctx
    }) : {};
    return {
      pageProps
    };
  } // 页面切换进行Loading加载


  componentDidMount() {
    next_router__WEBPACK_IMPORTED_MODULE_5__["Router"].events.on('routeChangeStart', this.startLoading);
    next_router__WEBPACK_IMPORTED_MODULE_5__["Router"].events.on('routeChangeComplete', this.stopLoading);
    next_router__WEBPACK_IMPORTED_MODULE_5__["Router"].events.on('routeChangeError', this.stopLoading);
  }

  componentWillUnmount() {
    next_router__WEBPACK_IMPORTED_MODULE_5__["Router"].events.off('routeChangeStart', this.startLoading);
    next_router__WEBPACK_IMPORTED_MODULE_5__["Router"].events.off('routeChangeComplete', this.stopLoading);
    next_router__WEBPACK_IMPORTED_MODULE_5__["Router"].events.off('routeChangeError', this.stopLoading);
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: store
    }, __jsx(_components_LayOut__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(Component, pageProps)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_reducers__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp));

/***/ }),

/***/ "./reducers/index.tsx":
/*!****************************!*\
  !*** ./reducers/index.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./constants/index.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const reducers = {
  // 类似 user: useReducer
  user: (state = {}, action) => {
    switch (action.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_3__["GET_USER_INFO"]:
        return _objectSpread({}, action.payload);

      case _constants__WEBPACK_IMPORTED_MODULE_3__["USER_LOGIN_OUT"]:
        return {};

      default:
        return state;
    }
  },
  home: (state = {}, action) => {
    switch (action.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_3__["GET_USER_REPOS"]:
        return _objectSpread({}, state, {
          user_repo: action.payload
        });

      case _constants__WEBPACK_IMPORTED_MODULE_3__["GET_USER_STARRED_REPOS"]:
        return _objectSpread({}, state, {
          user_starred_repo: action.payload
        });

      default:
        return state;
    }
  },
  search: (state = {}, action) => {
    switch (action.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_3__["GET_SEARCH_REPOS"]:
        return _objectSpread({}, state, {
          search_repo: action.payload
        });

      default:
        return state;
    }
  },
  detail: (state = {}, action) => {
    switch (action.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_3__["GET_DETAIL_USER_REPOS"]:
        return _objectSpread({}, state, {
          user_repo: action.payload
        });

      case _constants__WEBPACK_IMPORTED_MODULE_3__["GET_REPO_README"]:
        return _objectSpread({}, state, {
          repo_readme: action.payload
        });

      case _constants__WEBPACK_IMPORTED_MODULE_3__["GET_REPO_ISSUES"]:
        return _objectSpread({}, state, {
          repo_issues: action.payload
        });

      default:
        return state;
    }
  }
}; // 中间件

const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];
const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
const serverInitState = {
  user: {},
  home: {
    user_repo: [],
    user_starred_repo: []
  },
  search: {
    search_repo: []
  },
  detail: {
    user_repo: [],
    repo_readme: [],
    repo_issues: []
  }
}; // initState 接受服务端的数据并更新数据

const initStore = (initState = serverInitState) => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));

/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/tooltip":
/*!***********************************!*\
  !*** external "antd/lib/tooltip" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map