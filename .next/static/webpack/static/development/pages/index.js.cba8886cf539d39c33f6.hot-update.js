webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/src/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/iamcardonamhis/Desktop/tardan/shop/components/user.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var query = \"\\n    query usuario($input: IdInput!) {\\n        getUser(input: $input) {\\n            name\\n            email\\n        }\\n    }\\n    \";\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n      var variables, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              variables = {\n                input: {\n                  id: id\n                }\n              };\n              _context.next = 3;\n              return Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__[\"request\"])('http://localhost:4000/graphql', query, variables);\n\n            case 3:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().onAuthStateChanged(function (user) {});\n  }, []);\n\n  var content = __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }, \"Perfil\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"Cerrar sesi\\xF3n\")), !user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/login');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  }, \"Iniciar Sesi\\xF3n\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/register');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, \"Registrarse\")));\n\n  var title = function title() {\n    if (user) return __jsx(\"div\", {\n      style: {\n        color: \"#93a9b5\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 25\n      }\n    }, user);\n  };\n\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Popover\"], {\n    content: content,\n    placement: \"bottom\",\n    title: title(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      padding: \"1rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"UserOutlined\"], {\n    style: {\n      fontSize: \"1.5rem\",\n      color: \"#93a9b5\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  })));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIuanM/YzBhNCJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicXVlcnkiLCJnZXREYXRhIiwiaWQiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlcXVlc3QiLCJkYXRhIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiY29udGVudCIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInNpZ25PdXQiLCJwdXNoIiwidGl0bGUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLDJFQUFXO0FBQUE7O0FBQ3RCLE1BQU1BLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHNCLGtCQUVFQyxzREFBUSxDQUFDLElBQUQsQ0FGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUl0QixNQUFNQyxLQUFLLDJJQUFYOztBQVNBLE1BQU1DLE9BQU87QUFBQSxnTUFBRyxpQkFBTUMsRUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsdUJBRE0sR0FDTTtBQUNkQyxxQkFBSyxFQUFFO0FBQ0hGLG9CQUFFLEVBQUZBO0FBREc7QUFETyxlQUROO0FBQUE7QUFBQSxxQkFPT0csK0RBQU8sQ0FBQywrQkFBRCxFQUFrQ0wsS0FBbEMsRUFBeUNHLFNBQXpDLENBUGQ7O0FBQUE7QUFPTkcsa0JBUE07QUFBQSwrQ0FRTEEsSUFSSzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQTCxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBV0FNLHlEQUFTLENBQUMsWUFBTTtBQUNaQywyREFBUSxDQUFDQyxJQUFULEdBQWdCQyxrQkFBaEIsQ0FBbUMsVUFBU1osSUFBVCxFQUFlLENBRWpELENBRkQ7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1hLE9BQU8sR0FDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tiLElBQUksSUFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRWMsV0FBSyxFQUFFLFNBQVQ7QUFBb0JDLGNBQVEsRUFBRSxNQUE5QjtBQUFzQ0Msa0JBQVksRUFBRSxtQkFBcEQ7QUFBeUVDLG1CQUFhLEVBQUU7QUFBeEYsS0FBWjtBQUFnSCxhQUFTLEVBQUMsT0FBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBSyxTQUFLLEVBQUU7QUFBRUgsV0FBSyxFQUFFLFNBQVQ7QUFBb0JDLGNBQVEsRUFBRSxNQUE5QjtBQUFzQ0csZ0JBQVUsRUFBRTtBQUFsRCxLQUFaO0FBQTBFLGFBQVMsRUFBQyxPQUFwRjtBQUE0RixXQUFPLEVBQUU7QUFBQSxhQUFNUix1REFBUSxDQUFDQyxJQUFULEdBQWdCUSxPQUFoQixFQUFOO0FBQUEsS0FBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixDQUZSLEVBT0ssQ0FBQ25CLElBQUQsSUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRWMsV0FBSyxFQUFFLFNBQVQ7QUFBb0JDLGNBQVEsRUFBRSxNQUE5QjtBQUFzQ0Msa0JBQVksRUFBRSxtQkFBcEQ7QUFBeUVDLG1CQUFhLEVBQUU7QUFBeEYsS0FBWjtBQUFnSCxhQUFTLEVBQUMsT0FBMUg7QUFBa0ksV0FBTyxFQUFFO0FBQUEsYUFBTXBCLE1BQU0sQ0FBQ3VCLElBQVAsQ0FBWSxhQUFaLENBQU47QUFBQSxLQUEzSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUk7QUFBSyxTQUFLLEVBQUU7QUFBRU4sV0FBSyxFQUFFLFNBQVQ7QUFBb0JDLGNBQVEsRUFBRSxNQUE5QjtBQUFzQ0csZ0JBQVUsRUFBRTtBQUFsRCxLQUFaO0FBQTBFLGFBQVMsRUFBQyxPQUFwRjtBQUE0RixXQUFPLEVBQUU7QUFBQSxhQUFNckIsTUFBTSxDQUFDdUIsSUFBUCxDQUFZLGdCQUFaLENBQU47QUFBQSxLQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLENBUlIsQ0FESjs7QUFpQkEsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQixRQUFHckIsSUFBSCxFQUFTLE9BQU87QUFBSyxXQUFLLEVBQUU7QUFBRWMsYUFBSyxFQUFFO0FBQVQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1DZCxJQUFuQyxDQUFQO0FBQ1osR0FGRDs7QUFHQSxTQUNJLE1BQUMsNENBQUQ7QUFBUyxXQUFPLEVBQUVhLE9BQWxCO0FBQTJCLGFBQVMsRUFBQyxRQUFyQztBQUE4QyxTQUFLLEVBQUVRLEtBQUssRUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBYyxTQUFLLEVBQUU7QUFBRVAsY0FBUSxFQUFFLFFBQVo7QUFBc0JELFdBQUssRUFBRTtBQUE3QixLQUFyQjtBQUErRCxhQUFTLEVBQUMsT0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FESjtBQU9IIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2ZpcmViYXNlQ29uZmlnJ1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgcXVlcnkgPSBgXG4gICAgcXVlcnkgdXN1YXJpbygkaW5wdXQ6IElkSW5wdXQhKSB7XG4gICAgICAgIGdldFVzZXIoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgfVxuICAgIH1cbiAgICBgXG5cbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnLCBxdWVyeSwgdmFyaWFibGVzKVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24odXNlcikge1xuXG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBjb250ZW50ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VzZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzkzYTliNVwiLCBmb250U2l6ZTogXCIxcmVtXCIsIGJvcmRlckJvdHRvbTogXCIxcHggI2U1ZWRlZiBzb2xpZFwiLCBwYWRkaW5nQm90dG9tOiBcIjAuNXJlbVwiIH19IGNsYXNzTmFtZT1cImNsaWNrXCI+UGVyZmlsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiI2ZmNGQ0ZlwiLCBmb250U2l6ZTogXCIxcmVtXCIsIHBhZGRpbmdUb3A6IFwiMC41cmVtXCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIiBvbkNsaWNrPXsoKSA9PiBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpfT5DZXJyYXIgc2VzacOzbjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshdXNlciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjOTNhOWI1XCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgYm9yZGVyQm90dG9tOiBcIjFweCAjZTVlZGVmIHNvbGlkXCIsIHBhZGRpbmdCb3R0b206IFwiMC41cmVtXCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3VzZXIvbG9naW4nKX0+SW5pY2lhciBTZXNpw7NuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiI2ZmNGQ0ZlwiLCBmb250U2l6ZTogXCIxcmVtXCIsIHBhZGRpbmdUb3A6IFwiMC41cmVtXCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3VzZXIvcmVnaXN0ZXInKX0+UmVnaXN0cmFyc2U8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IHRpdGxlID0gKCkgPT4ge1xuICAgICAgICBpZih1c2VyKSByZXR1cm4gPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjOTNhOWI1XCIgfX0+e3VzZXJ9PC9kaXY+XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPFBvcG92ZXIgY29udGVudD17Y29udGVudH0gcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e3RpdGxlKCl9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiLCBjb2xvcjogXCIjOTNhOWI1XCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user.js\n");

/***/ })

})