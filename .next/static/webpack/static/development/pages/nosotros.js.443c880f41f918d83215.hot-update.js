webpackHotUpdate("static/development/pages/nosotros.js",{

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/src/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/iamcardonamhis/Desktop/tardan/shop/components/user.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var query = \"\\n    query usuario($input: IdInput!) {\\n        getUser(input: $input) {\\n            name\\n            email\\n        }\\n    }\\n    \";\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n      var variables, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              variables = {\n                input: {\n                  id: id\n                }\n              };\n              _context.next = 3;\n              return Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__[\"request\"])('http://localhost:4000/graphql', query, variables);\n\n            case 3:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function getUser() {\n      return _getUser.apply(this, arguments);\n    }\n\n    function _getUser() {\n      _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var first, userToken;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().currentUser;\n\n              case 3:\n                first = _context2.sent;\n                console.log(first);\n\n                if (!first) {\n                  _context2.next = 10;\n                  break;\n                }\n\n                _context2.next = 8;\n                return _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().currentUser;\n\n              case 8:\n                userToken = _context2.sent;\n                console.log(userToken);\n\n              case 10:\n                _context2.next = 15;\n                break;\n\n              case 12:\n                _context2.prev = 12;\n                _context2.t0 = _context2[\"catch\"](0);\n                console.log(_context2.t0);\n\n              case 15:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 12]]);\n      }));\n      return _getUser.apply(this, arguments);\n    }\n\n    getUser();\n  }, []);\n\n  var content = __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  }, \"Perfil\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }, \"Cerrar sesi\\xF3n\")), !user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/login');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  }, \"Iniciar Sesi\\xF3n\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/register');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 21\n    }\n  }, \"Registrarse\")));\n\n  var title = function title() {\n    if (user) return __jsx(\"div\", {\n      style: {\n        color: \"#93a9b5\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 25\n      }\n    }, user);\n  };\n\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Popover\"], {\n    content: content,\n    placement: \"bottom\",\n    title: title(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      padding: \"1rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"UserOutlined\"], {\n    style: {\n      fontSize: \"1.5rem\",\n      color: \"#93a9b5\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  })));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIuanM/YzBhNCJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicXVlcnkiLCJnZXREYXRhIiwiaWQiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlcXVlc3QiLCJkYXRhIiwidXNlRWZmZWN0IiwiZ2V0VXNlciIsImZpcmViYXNlIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwiZmlyc3QiLCJjb25zb2xlIiwibG9nIiwidXNlclRva2VuIiwiY29udGVudCIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInNpZ25PdXQiLCJwdXNoIiwidGl0bGUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLDJFQUFXO0FBQUE7O0FBQ3RCLE1BQU1BLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHNCLGtCQUVFQyxzREFBUSxDQUFDLElBQUQsQ0FGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUl0QixNQUFNQyxLQUFLLDJJQUFYOztBQVNBLE1BQU1DLE9BQU87QUFBQSxnTUFBRyxpQkFBTUMsRUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsdUJBRE0sR0FDTTtBQUNkQyxxQkFBSyxFQUFFO0FBQ0hGLG9CQUFFLEVBQUZBO0FBREc7QUFETyxlQUROO0FBQUE7QUFBQSxxQkFPT0csK0RBQU8sQ0FBQywrQkFBRCxFQUFrQ0wsS0FBbEMsRUFBeUNHLFNBQXpDLENBUGQ7O0FBQUE7QUFPTkcsa0JBUE07QUFBQSwrQ0FRTEEsSUFSSzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQTCxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBV0FN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QUFLLEVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQWMsU0FBSyxFQUFFO0FBQUVQLGNBQVEsRUFBRSxRQUFaO0FBQXNCRCxXQUFLLEVBQUU7QUFBN0IsS0FBckI7QUFBK0QsYUFBUyxFQUFDLE9BQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREo7QUFPSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi9maXJlYmFzZUNvbmZpZydcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIHF1ZXJ5IHVzdWFyaW8oJGlucHV0OiBJZElucHV0ISkge1xuICAgICAgICBnZXRVc2VyKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgIH1cbiAgICB9XG4gICAgYFxuXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIGlkID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsJywgcXVlcnksIHZhcmlhYmxlcylcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uICh1c2VyKSB7c2V0VXNlclRva2VuKHVzZXIpfSlcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdCA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpcnN0KVxuICAgICAgICAgICAgICAgIGlmKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJUb2tlbiA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyVG9rZW4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRVc2VyKClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dXNlciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjOTNhOWI1XCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgYm9yZGVyQm90dG9tOiBcIjFweCAjZTVlZGVmIHNvbGlkXCIsIHBhZGRpbmdCb3R0b206IFwiMC41cmVtXCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIj5QZXJmaWw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjZmY0ZDRmXCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgcGFkZGluZ1RvcDogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIG9uQ2xpY2s9eygpID0+IGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCl9PkNlcnJhciBzZXNpw7NuPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyF1c2VyICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM5M2E5YjVcIiwgZm9udFNpemU6IFwiMXJlbVwiLCBib3JkZXJCb3R0b206IFwiMXB4ICNlNWVkZWYgc29saWRcIiwgcGFkZGluZ0JvdHRvbTogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdXNlci9sb2dpbicpfT5JbmljaWFyIFNlc2nDs248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjZmY0ZDRmXCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgcGFkZGluZ1RvcDogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdXNlci9yZWdpc3RlcicpfT5SZWdpc3RyYXJzZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgdGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHVzZXIpIHJldHVybiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM5M2E5YjVcIiB9fT57dXNlcn08L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8UG9wb3ZlciBjb250ZW50PXtjb250ZW50fSBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17dGl0bGUoKX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIsIGNvbG9yOiBcIiM5M2E5YjVcIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user.js\n");

/***/ })

})