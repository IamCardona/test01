webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/src/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/iamcardonamhis/Desktop/tardan/shop/components/user.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var query = \"\\n    query usuario($input: IdInput!) {\\n        getUser(input: $input) {\\n            name\\n            email\\n        }\\n    }\\n    \";\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n      var variables, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              variables = {\n                input: {\n                  id: id\n                }\n              };\n              _context.next = 3;\n              return Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__[\"request\"])('http://localhost:4000/graphql', query, variables);\n\n            case 3:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function getUser() {\n      return _getUser.apply(this, arguments);\n    }\n\n    function _getUser() {\n      _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var first;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().currentUser;\n\n              case 3:\n                first = _context2.sent;\n\n                if (first) {}\n\n                _context2.next = 10;\n                break;\n\n              case 7:\n                _context2.prev = 7;\n                _context2.t0 = _context2[\"catch\"](0);\n                console.log(_context2.t0);\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 7]]);\n      }));\n      return _getUser.apply(this, arguments);\n    }\n\n    getUser();\n  }, []);\n\n  var content = __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, \"Perfil\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, \"Cerrar sesi\\xF3n\")), !user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/login');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 21\n    }\n  }, \"Iniciar Sesi\\xF3n\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/register');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }, \"Registrarse\")));\n\n  var title = function title() {\n    if (user) return __jsx(\"div\", {\n      style: {\n        color: \"#93a9b5\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 25\n      }\n    }, user);\n  };\n\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Popover\"], {\n    content: content,\n    placement: \"bottom\",\n    title: title(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      padding: \"1rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"UserOutlined\"], {\n    style: {\n      fontSize: \"1.5rem\",\n      color: \"#93a9b5\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  })));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIuanM/YzBhNCJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicXVlcnkiLCJnZXREYXRhIiwiaWQiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlcXVlc3QiLCJkYXRhIiwidXNlRWZmZWN0IiwiZ2V0VXNlciIsImZpcmViYXNlIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwiZmlyc3QiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInNpZ25PdXQiLCJwdXNoIiwidGl0bGUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLDJFQUFXO0FBQUE7O0FBQ3RCLE1BQU1BLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHNCLGtCQUVFQyxzREFBUSxDQUFDLElBQUQsQ0FGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUl0QixNQUFNQyxLQUFLLDJJQUFYOztBQVNBLE1BQU1DLE9BQU87QUFBQSxnTUFBRyxpQkFBTUMsRUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsdUJBRE0sR0FDTTtBQUNkQyxxQkFBSyxFQUFFO0FBQ0hGLG9CQUFFLEVBQUZBO0FBREc7QUFETyxlQUROO0FBQUE7QUFBQSxxQkFPT0csK0RBQU8sQ0FBQywrQkFBRCxFQUFrQ0wsS0FBbEMsRUFBeUNHLFNBQXpDLENBUGQ7O0FBQUE7QUFPTkcsa0JBUE07QUFBQSwrQ0FRTEEsSUFSSzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQTCxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBV0FNLHlEQUFTLENBQUMs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RVAsY0FBUSxFQUFFLFFBQVo7QUFBc0JELFdBQUssRUFBRTtBQUE3QixLQUFyQjtBQUErRCxhQUFTLEVBQUMsT0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FESjtBQU9IIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2ZpcmViYXNlQ29uZmlnJ1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgcXVlcnkgPSBgXG4gICAgcXVlcnkgdXN1YXJpbygkaW5wdXQ6IElkSW5wdXQhKSB7XG4gICAgICAgIGdldFVzZXIoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgfVxuICAgIH1cbiAgICBgXG5cbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnLCBxdWVyeSwgdmFyaWFibGVzKVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGF3YWl0IGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24gKHVzZXIpIHtzZXRVc2VyVG9rZW4odXNlcil9KVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyXG4gICAgICAgICAgICAgICAgaWYoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRVc2VyKClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dXNlciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjOTNhOWI1XCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgYm9yZGVyQm90dG9tOiBcIjFweCAjZTVlZGVmIHNvbGlkXCIsIHBhZGRpbmdCb3R0b206IFwiMC41cmVtXCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIj5QZXJmaWw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjZmY0ZDRmXCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgcGFkZGluZ1RvcDogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIG9uQ2xpY2s9eygpID0+IGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCl9PkNlcnJhciBzZXNpw7NuPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyF1c2VyICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM5M2E5YjVcIiwgZm9udFNpemU6IFwiMXJlbVwiLCBib3JkZXJCb3R0b206IFwiMXB4ICNlNWVkZWYgc29saWRcIiwgcGFkZGluZ0JvdHRvbTogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdXNlci9sb2dpbicpfT5JbmljaWFyIFNlc2nDs248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjZmY0ZDRmXCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgcGFkZGluZ1RvcDogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdXNlci9yZWdpc3RlcicpfT5SZWdpc3RyYXJzZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgdGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHVzZXIpIHJldHVybiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM5M2E5YjVcIiB9fT57dXNlcn08L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8UG9wb3ZlciBjb250ZW50PXtjb250ZW50fSBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17dGl0bGUoKX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIsIGNvbG9yOiBcIiM5M2E5YjVcIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user.js\n");

/***/ })

})