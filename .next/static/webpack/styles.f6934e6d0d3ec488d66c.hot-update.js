webpackHotUpdate("styles",{

/***/ "./node_modules/_github-markdown-css@4.0.0@github-markdown-css/github-markdown.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_github-markdown-css@4.0.0@github-markdown-css/github-markdown.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1588865349149");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.f6934e6d0d3ec488d66c.hot-update.js.map