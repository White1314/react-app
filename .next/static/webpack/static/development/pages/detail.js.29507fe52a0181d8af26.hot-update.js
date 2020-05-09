webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./components/SearchUser.tsx":
/*!***********************************!*\
  !*** ./components/SearchUser.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/_antd@4.2.0@antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/_antd@4.2.0@antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.9.6@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.1@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/_lodash@4.17.15@lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/utils.js */ "./server/utils.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var SearchUser = function SearchUser(_ref) {
  var onChange = _ref.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      items = _useState2[0],
      setItems = _useState2[1];

  var nextIdRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(0);
  var searchUser = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(function _callee(value) {
    var id, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nextIdRef.current += 1;
            id = nextIdRef.current;
            setSearch(true);
            setItems([]);

            if (!value) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_5__["getApiData"])(null, "/search/users?q=".concat(value)));

          case 7:
            _context.t0 = _context.sent;
            _context.next = 11;
            break;

          case 10:
            _context.t0 = {};

          case 11:
            data = _context.t0;

            if (!(id !== nextIdRef.current)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return");

          case 14:
            setSearch(false);
            setItems(data.items || []);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, 2000), []);
  var handleOnChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (value) {
    onChange(value);
  }, []);
  return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_0___default.a, {
    showSearch: true,
    notFoundContent: search ? __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: "small"
    }) : __jsx("span", null, "no data"),
    filterOption: false,
    placeholder: "\u641C\u7D22\u7528\u6237",
    allowClear: true,
    onSearch: searchUser,
    onChange: handleOnChange,
    style: {
      width: 150,
      marginBottom: 20
    }
  }, items.map(function (item) {
    return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_0___default.a.Option, {
      value: item.value,
      key: item.id
    }, item.login);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

/***/ })

})
//# sourceMappingURL=detail.js.29507fe52a0181d8af26.hot-update.js.map