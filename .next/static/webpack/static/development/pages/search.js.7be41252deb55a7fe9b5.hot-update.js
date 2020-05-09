webpackHotUpdate("static\\development\\pages\\search.js",{

/***/ "./pages/search.tsx":
/*!**************************!*\
  !*** ./pages/search.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.9.6@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/_antd@4.2.0@antd/lib/pagination/index.js");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/_antd@4.2.0@antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/_antd@4.2.0@antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/_styled-jsx@3.2.5@styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.1@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/_next@9.3.6@next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/_next@9.3.6@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.0@react-redux/es/index.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../server/utils.js */ "./server/utils.js");
/* harmony import */ var _server_utils_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_server_utils_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./utils/index.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions */ "./actions/index.tsx");
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.tsx");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









var LANGUAGES = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java', 'Rust'];
var SORT_TYPES = [{
  name: 'Best Match'
}, {
  name: 'Most Stars',
  value: 'stars',
  order: 'dsc'
}, {
  name: 'Fewest Stars',
  value: 'stars',
  order: 'asc'
}, {
  name: 'Most Forks',
  value: 'forks',
  order: 'dsc'
}, {
  name: 'Fewest Forks',
  value: 'forks',
  order: 'asc'
}];
var selectedItemStyle = {
  borderLeft: '2px solid #6739b6',
  fontWeight: 100
};
var Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Sider,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Content;

var Search = function Search(_ref) {
  var router = _ref.router;
  var query = router.query;
  var total_count = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.search.search_repo.total_count;
  });
  var items = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.search.search_repo.items;
  });
  var handleGetLink = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (item, query) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getLink"])(item, query);
  }, []);
  return __jsx("div", {
    className: "jsx-1979421917" + " " + "root"
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(Sider, null, __jsx("div", {
    className: "jsx-1979421917" + " " + "menu"
  }, __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bordered: true,
    header: __jsx("span", {
      className: "jsx-1979421917" + " " + "list-header"
    }, "\u8BED\u8A00"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGES,
    renderItem: function renderItem(item) {
      var selected = item === query.lang;
      return __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? __jsx("span", {
        className: "jsx-1979421917"
      }, item) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getLink"])(item, query)
      }, __jsx("a", {
        className: "jsx-1979421917"
      }, item)));
    }
  }), __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bordered: true,
    header: __jsx("span", {
      className: "jsx-1979421917" + " " + "list-header"
    }, "\u6392\u5E8F"),
    dataSource: SORT_TYPES,
    renderItem: function renderItem(item) {
      var selected = false;

      if (item.name === 'Best Match' && !query.sort) {
        selected = true;
      } else if (item.value === query.sort && item.order === query.order) {
        selected = true;
      }

      return __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? __jsx("span", {
        className: "jsx-1979421917"
      }, item.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: handleGetLink(item, query)
      }, __jsx("a", {
        className: "jsx-1979421917"
      }, item.name)));
    }
  }))), __jsx(Content, null, __jsx("div", {
    className: "jsx-1979421917" + " " + "content"
  }, __jsx("div", {
    className: "jsx-1979421917" + " " + "items-warpper"
  }, __jsx("h3", {
    className: "jsx-1979421917" + " " + "repos-title"
  }, total_count, " \u4E2A\u4ED3\u5E93"), items ? items.map(function (item) {
    return __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_12__["default"], {
      repo: item,
      key: item.id
    });
  }) : null), __jsx("div", {
    className: "jsx-1979421917" + " " + "pagination"
  }, __jsx(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default.a, {
    pageSize: 30,
    current: Number(query.page) || 1,
    total: total_count,
    onChange: function onChange() {},
    itemRender: function itemRender(page, type, ol) {
      var p = type === 'page' ? page : type === 'prev' ? page - 1 : page + 1;
      var a = type === 'page' ? page : ol; // a 可能是 页码 p 或者 Element ...

      return Object(react__WEBPACK_IMPORTED_MODULE_5__["isValidElement"])(a) ? a : __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: handleGetLink(p, query)
      }, __jsx("a", {
        className: "jsx-1979421917"
      }, a));
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1979421917"
  }, ".root.jsx-1979421917{height:100%;}.menu.jsx-1979421917{height:100%;overflow-x:hidden;overflow-y:auto;background:#fff;}.content.jsx-1979421917{height:100%;padding-left:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#fff;}.items-warpper.jsx-1979421917{-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFwzNjBEb3dubG9hZHNcXFZzY29kZVxccHJvZ3JhbVxcTmV4dC1HaXRodWItQXBwXFxwYWdlc1xcc2VhcmNoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SWtCLEFBR3VCLEFBR0EsQUFNQSxBQU9MLFlBZlQsQUFHb0IsQUFNQSxrQkFMRixBQU1ILEdBTUcsYUFYQSxHQVlsQixhQVhBLDBDQUt3Qiw4RUFDTixnQkFDbEIiLCJmaWxlIjoiRDpcXDM2MERvd25sb2Fkc1xcVnNjb2RlXFxwcm9ncmFtXFxOZXh0LUdpdGh1Yi1BcHBcXHBhZ2VzXFxzZWFyY2gudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnQsIHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBMYXlvdXQsIExpc3QsIFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBnZXRBcGlEYXRhIH0gZnJvbSAnLi4vc2VydmVyL3V0aWxzLmpzJztcclxuaW1wb3J0IHsgZ2V0UGFyYW1zVG9QYXRoIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRMaW5rIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nO1xyXG5cclxuY29uc3QgTEFOR1VBR0VTID0gWydKYXZhU2NyaXB0JywgJ0hUTUwnLCAnQ1NTJywgJ1R5cGVTY3JpcHQnLCAnSmF2YScsICdSdXN0J107XHJcbmNvbnN0IFNPUlRfVFlQRVMgPSBbXHJcbiAgeyBuYW1lOiAnQmVzdCBNYXRjaCcgfSxcclxuICB7IG5hbWU6ICdNb3N0IFN0YXJzJywgdmFsdWU6ICdzdGFycycsIG9yZGVyOiAnZHNjJyB9LFxyXG4gIHsgbmFtZTogJ0Zld2VzdCBTdGFycycsIHZhbHVlOiAnc3RhcnMnLCBvcmRlcjogJ2FzYycgfSxcclxuICB7IG5hbWU6ICdNb3N0IEZvcmtzJywgdmFsdWU6ICdmb3JrcycsIG9yZGVyOiAnZHNjJyB9LFxyXG4gIHsgbmFtZTogJ0Zld2VzdCBGb3JrcycsIHZhbHVlOiAnZm9ya3MnLCBvcmRlcjogJ2FzYycgfSxcclxuXTtcclxuY29uc3Qgc2VsZWN0ZWRJdGVtU3R5bGUgPSB7XHJcbiAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjNjczOWI2JyxcclxuICBmb250V2VpZ2h0OiAxMDAsXHJcbn07XHJcbmNvbnN0IHsgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuXHJcbmludGVyZmFjZSBJdGVtIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBvcmRlcjogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUyB7XHJcbiAgc2VhcmNoPzoge1xyXG4gICAgc2VhcmNoX3JlcG86IGFueTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcclxuXHJcbiAgY29uc3QgdG90YWxfY291bnQgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUykgPT4gc3RhdGUuc2VhcmNoLnNlYXJjaF9yZXBvLnRvdGFsX2NvdW50XHJcbiAgKTtcclxuICBsZXQgaXRlbXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFMpID0+IHN0YXRlLnNlYXJjaC5zZWFyY2hfcmVwby5pdGVtcyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdldExpbmsgPSB1c2VDYWxsYmFjaygoaXRlbSwgcXVlcnkpID0+IGdldExpbmsoaXRlbSwgcXVlcnkpLCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8U2lkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7or63oqIA8L3NwYW4+fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgICBkYXRhU291cmNlPXtMQU5HVUFHRVN9XHJcbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGl0ZW0gPT09IHF1ZXJ5Lmxhbmc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtzZWxlY3RlZCA/IHNlbGVjdGVkSXRlbVN0eWxlIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtnZXRMaW5rKGl0ZW0sIHF1ZXJ5KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7mjpLluo88L3NwYW4+fVxyXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XHJcbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW06IEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ0Jlc3QgTWF0Y2gnICYmICFxdWVyeS5zb3J0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPT09IHF1ZXJ5LnNvcnQgJiZcclxuICAgICAgICAgICAgICAgICAgaXRlbS5vcmRlciA9PT0gcXVlcnkub3JkZXJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtzZWxlY3RlZCA/IHNlbGVjdGVkSXRlbVN0eWxlIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hhbmRsZUdldExpbmsoaXRlbSwgcXVlcnkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0ubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NpZGVyPlxyXG4gICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtd2FycHBlclwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcy10aXRsZVwiPnt0b3RhbF9jb3VudH0g5Liq5LuT5bqTPC9oMz5cclxuICAgICAgICAgICAgICB7aXRlbXNcclxuICAgICAgICAgICAgICAgID8gaXRlbXMubWFwKChpdGVtOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UmVwbyByZXBvPXtpdGVtfSBrZXk9e2l0ZW0uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50PXtOdW1iZXIocXVlcnkucGFnZSkgfHwgMX1cclxuICAgICAgICAgICAgICAgIHRvdGFsPXt0b3RhbF9jb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhwYWdlLCB0eXBlLCBvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwID1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAncGFnZSdcclxuICAgICAgICAgICAgICAgICAgICAgID8gcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB0eXBlID09PSAncHJldidcclxuICAgICAgICAgICAgICAgICAgICAgID8gcGFnZSAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgIDogcGFnZSArIDE7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB0eXBlID09PSAncGFnZScgPyBwYWdlIDogb2w7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGEg5Y+v6IO95pivIOmhteeggSBwIOaIluiAhSBFbGVtZW50IC4uLlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZEVsZW1lbnQoYSkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgYVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hhbmRsZUdldExpbmsocCwgcXVlcnkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPnthfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtcy13YXJwcGVyIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIC8vIGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT0ke25hbWV9YFxyXG4gIGNvbnN0IHsgc3RvcmUsIHF1ZXJ5IH0gPSBjdHg7XHJcbiAgLy8gYXBpL3NlYXJjaFxyXG4gIGNvbnN0IHNlYXJjaFJlcG9kYXRhID0gYXdhaXQgZ2V0QXBpRGF0YShcclxuICAgIGN0eCxcclxuICAgIGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7Z2V0UGFyYW1zVG9QYXRoKHF1ZXJ5KX1gXHJcbiAgKTtcclxuICBzdG9yZS5kaXNwYXRjaChhY3Rpb25zLmdldFNlYXJjaFJlcG9zKHNlYXJjaFJlcG9kYXRhKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaCk7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\360Downloads\\\\Vscode\\\\program\\\\Next-Github-App\\\\pages\\\\search.tsx */"));
};

Search.getInitialProps = function _callee(_ref2) {
  var ctx, store, query, searchRepodata;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx = _ref2.ctx;
          // `https://api.github.com/search/repositories?q=${name}`
          store = ctx.store, query = ctx.query; // api/search

          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_server_utils_js__WEBPACK_IMPORTED_MODULE_9__["getApiData"])(ctx, "/search/repositories".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getParamsToPath"])(query))));

        case 4:
          searchRepodata = _context.sent;
          store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["getSearchRepos"](searchRepodata));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Search));

/***/ })

})
//# sourceMappingURL=search.js.7be41252deb55a7fe9b5.hot-update.js.map