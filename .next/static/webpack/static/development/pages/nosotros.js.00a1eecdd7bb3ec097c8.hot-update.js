webpackHotUpdate("static/development/pages/nosotros.js",{

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/src/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/iamcardonamhis/Desktop/tardan/shop/components/user.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var query = \"\\n    query usuario($input: IdInput!) {\\n        getUser(input: $input) {\\n            name\\n            email\\n        }\\n    }\\n    \";\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth().onAuthStateChanged(function (userToken) {\n      var variables = {\n        input: {\n          id: userToken.uid\n        }\n      };\n      Object(graphql_request__WEBPACK_IMPORTED_MODULE_5__[\"request\"])('http://localhost:4000/graphql', query, variables).then(function (data) {\n        console.log(data.getUser.name);\n      });\n    });\n  }, []);\n\n  var content = __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, \"Perfil\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth().signOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, \"Cerrar sesi\\xF3n\")), !user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/login');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }\n  }, \"Iniciar Sesi\\xF3n\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/register');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 21\n    }\n  }, \"Registrarse\")));\n\n  var title = function title() {\n    if (user) return __jsx(\"div\", {\n      style: {\n        color: \"#93a9b5\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 25\n      }\n    }, \"knk\");\n  };\n\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Popover\"], {\n    content: content,\n    placement: \"bottom\",\n    title: title(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      padding: \"1rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"UserOutlined\"], {\n    style: {\n      fontSize: \"1.5rem\",\n      color: \"#93a9b5\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  })));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIuanM/YzBhNCJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyVG9rZW4iLCJ2YXJpYWJsZXMiLCJpbnB1dCIsImlkIiwidWlkIiwicmVxdWVzdCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldFVzZXIiLCJuYW1lIiwiY29udGVudCIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInNpZ25PdXQiLCJwdXNoIiwidGl0bGUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSwyRUFBVztBQUFBOztBQUN0QixNQUFNQSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURzQixrQkFFRUMsc0RBQVEsQ0FBQyxJQUFELENBRlY7QUFBQSxNQUVmQyxJQUZlO0FBQUEsTUFFVEMsT0FGUzs7QUFJdEIsTUFBTUMsS0FBSywySUFBWDtBQVNBQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsMkRBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsa0JBQWhCLENBQW1DLFVBQVNDLFNBQVQsRUFBb0I7QUFDbkQsVUFBTUMsU0FBUyxHQUFHO0FBQ2RDLGFBQUssRUFBRTtBQUNIQyxZQUFFLEVBQUVILFNBQVMsQ0FBQ0k7QUFEWDtBQURPLE9BQWxCO0FBTUFDLHFFQUFPLENBQUMsK0JBQUQsRUFBa0NWLEtBQWxDLEVBQXlDTSxTQUF6QyxDQUFQLENBQTJESyxJQUEzRCxDQUFnRSxVQUFDQyxJQUFELEVBQVU7QUFDdEVDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLE9BQUwsQ0FBYUMsSUFBekI7QUFDSCxPQUZEO0FBR0gsS0FWRDtBQVdILEdBWlEsRUFZTixFQVpNLENBQVQ7O0FBY0EsTUFBTUMsT0FBTyxHQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS25CLElBQUksSUFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRW9CLFdBQUssRUFBRSxTQUFUO0FBQW9CQyxjQUFRLEVBQUUsTUFBOUI7QUFBc0NDLGtCQUFZLEVBQUUsbUJBQXBEO0FBQXlFQyxtQkFBYSxFQUFFO0FBQXhGLEtBQVo7QUFBZ0gsYUFBUyxFQUFDLE9BQTFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQUssU0FBSyxFQUFFO0FBQUVILFdBQUssRUFBRSxTQUFUO0FBQW9CQyxjQUFRLEVBQUUsTUFBOUI7QUFBc0NHLGdCQUFVLEVBQUU7QUFBbEQsS0FBWjtBQUEwRSxhQUFTLEVBQUMsT0FBcEY7QUFBNEYsV0FBTyxFQUFFO0FBQUEsYUFBTXBCLHVEQUFRLENBQUNDLElBQVQsR0FBZ0JvQixPQUFoQixFQUFOO0FBQUEsS0FBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixDQUZSLEVBT0ssQ0FBQ3pCLElBQUQsSUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRW9CLFdBQUssRUFBRSxTQUFUO0FBQW9CQyxjQUFRLEVBQUUsTUFBOUI7QUFBc0NDLGtCQUFZLEVBQUUsbUJBQXBEO0FBQXlFQyxtQkFBYSxFQUFFO0FBQXhGLEtBQVo7QUFBZ0gsYUFBUyxFQUFDLE9BQTFIO0FBQWtJLFdBQU8sRUFBRTtBQUFBLGFBQU0xQixNQUFNLENBQUM2QixJQUFQLENBQVksYUFBWixDQUFOO0FBQUEsS0FBM0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVJO0FBQUssU0FBSyxFQUFFO0FBQUVOLFdBQUssRUFBRSxTQUFUO0FBQW9CQyxjQUFRLEVBQUUsTUFBOUI7QUFBc0NHLGdCQUFVLEVBQUU7QUFBbEQsS0FBWjtBQUEwRSxhQUFTLEVBQUMsT0FBcEY7QUFBNEYsV0FBTyxFQUFFO0FBQUEsYUFBTTNCLE1BQU0sQ0FBQzZCLElBQVAsQ0FBWSxnQkFBWixDQUFOO0FBQUEsS0FBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixDQVJSLENBREo7O0FBaUJBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDaEIsUUFBRzNCLElBQUgsRUFBUyxPQUFPO0FBQUssV0FBSyxFQUFFO0FBQUVvQixhQUFLLEVBQUU7QUFBVCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNaLEdBRkQ7O0FBR0EsU0FDSSxNQUFDLDRDQUFEO0FBQVMsV0FBTyxFQUFFRCxPQUFsQjtBQUEyQixhQUFTLEVBQUMsUUFBckM7QUFBOEMsU0FBSyxFQUFFUSxLQUFLLEVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQWMsU0FBSyxFQUFFO0FBQUVQLGNBQVEsRUFBRSxRQUFaO0FBQXNCRCxXQUFLLEVBQUU7QUFBN0IsS0FBckI7QUFBK0QsYUFBUyxFQUFDLE9BQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREo7QUFPSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi9maXJlYmFzZUNvbmZpZydcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIHF1ZXJ5IHVzdWFyaW8oJGlucHV0OiBJZElucHV0ISkge1xuICAgICAgICBnZXRVc2VyKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgIH1cbiAgICB9XG4gICAgYFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbih1c2VyVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICAgICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBpZDogdXNlclRva2VuLnVpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnLCBxdWVyeSwgdmFyaWFibGVzKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5nZXRVc2VyLm5hbWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgY29udGVudCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1c2VyICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM5M2E5YjVcIiwgZm9udFNpemU6IFwiMXJlbVwiLCBib3JkZXJCb3R0b206IFwiMXB4ICNlNWVkZWYgc29saWRcIiwgcGFkZGluZ0JvdHRvbTogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiPlBlcmZpbDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiNmZjRkNGZcIiwgZm9udFNpemU6IFwiMXJlbVwiLCBwYWRkaW5nVG9wOiBcIjAuNXJlbVwiIH19IGNsYXNzTmFtZT1cImNsaWNrXCIgb25DbGljaz17KCkgPT4gZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKX0+Q2VycmFyIHNlc2nDs248L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IXVzZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzkzYTliNVwiLCBmb250U2l6ZTogXCIxcmVtXCIsIGJvcmRlckJvdHRvbTogXCIxcHggI2U1ZWRlZiBzb2xpZFwiLCBwYWRkaW5nQm90dG9tOiBcIjAuNXJlbVwiIH19IGNsYXNzTmFtZT1cImNsaWNrXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy91c2VyL2xvZ2luJyl9PkluaWNpYXIgU2VzacOzbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiNmZjRkNGZcIiwgZm9udFNpemU6IFwiMXJlbVwiLCBwYWRkaW5nVG9wOiBcIjAuNXJlbVwiIH19IGNsYXNzTmFtZT1cImNsaWNrXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy91c2VyL3JlZ2lzdGVyJyl9PlJlZ2lzdHJhcnNlPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCB0aXRsZSA9ICgpID0+IHtcbiAgICAgICAgaWYodXNlcikgcmV0dXJuIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzkzYTliNVwiIH19PmtuazwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxQb3BvdmVyIGNvbnRlbnQ9e2NvbnRlbnR9IHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXt0aXRsZSgpfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiwgY29sb3I6IFwiIzkzYTliNVwiIH19IGNsYXNzTmFtZT1cImNsaWNrXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/user.js\n");

/***/ })

})