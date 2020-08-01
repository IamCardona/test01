webpackHotUpdate("static/development/pages/nosotros.js",{

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/src/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/iamcardonamhis/Desktop/tardan/shop/components/user.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var query = \"\\n    query usuario($input: IdInput!) {\\n        getUser(input: $input) {\\n            name\\n            email\\n        }\\n    }\\n    \";\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n      var variables, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              variables = {\n                input: {\n                  id: id\n                }\n              };\n              _context.next = 3;\n              return Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__[\"request\"])('http://localhost:4000/graphql', query, variables);\n\n            case 3:\n              data = _context.sent;\n              return _context.abrupt(\"return\", data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function getUser() {\n      return _getUser.apply(this, arguments);\n    }\n\n    function _getUser() {\n      _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var first, userToken;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().currentUser;\n\n              case 3:\n                first = _context2.sent;\n\n                if (!(first === null)) {\n                  _context2.next = 9;\n                  break;\n                }\n\n                _context2.next = 7;\n                return _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().currentUser;\n\n              case 7:\n                userToken = _context2.sent;\n                console.log(userToken);\n\n              case 9:\n                _context2.next = 14;\n                break;\n\n              case 11:\n                _context2.prev = 11;\n                _context2.t0 = _context2[\"catch\"](0);\n                console.log(_context2.t0);\n\n              case 14:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 11]]);\n      }));\n      return _getUser.apply(this, arguments);\n    }\n\n    getUser();\n  }, []);\n\n  var content = __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, \"Perfil\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  }, \"Cerrar sesi\\xF3n\")), !user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/login');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }, \"Iniciar Sesi\\xF3n\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/register');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  }, \"Registrarse\")));\n\n  var title = function title() {\n    if (user) return __jsx(\"div\", {\n      style: {\n        color: \"#93a9b5\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 25\n      }\n    }, user);\n  };\n\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Popover\"], {\n    content: content,\n    placement: \"bottom\",\n    title: title(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      padding: \"1rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"UserOutlined\"], {\n    style: {\n      fontSize: \"1.5rem\",\n      color: \"#93a9b5\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  })));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIuanM/YzBhNCJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicXVlcnkiLCJnZXREYXRhIiwiaWQiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlcXVlc3QiLCJkYXRhIiwidXNlRWZmZWN0IiwiZ2V0VXNlciIsImZpcmViYXNlIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwiZmlyc3QiLCJ1c2VyVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInNpZ25PdXQiLCJwdXNoIiwidGl0bGUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLDJFQUFXO0FBQUE7O0FBQ3RCLE1BQU1BLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHNCLGtCQUVFQyxzREFBUSxDQUFDLElBQUQsQ0FGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUl0QixNQUFNQyxLQUFLLDJJQUFYOztBQVNBLE1BQU1DLE9BQU87QUFBQSxnTUFBRyxpQkFBTUMsRUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsdUJBRE0sR0FDTTtBQUNkQyxxQkFBSyxFQUFFO0FBQ0hGLG9CQUFFLEVBQUZBO0FBREc7QUFETyxlQUROO0FBQUE7QUFBQSxxQkFPT0csK0RBQU8sQ0FBQywrQkFBRCxFQUFrQ0wsS0FBbEMsRUFBeUNHLFNBQXpDLENBUGQ7O0FBQUE7QUFPTkcsa0JBUE07QUFBQSwrQ0FRTEEsSUFSSzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQTCxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBV0FN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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFjLFNBQUssRUFBRTtBQUFFUCxjQUFRLEVBQUUsUUFBWjtBQUFzQkQsV0FBSyxFQUFFO0FBQTdCLEtBQXJCO0FBQStELGFBQVMsRUFBQyxPQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKO0FBT0giLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2VDb25maWcnXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBxdWVyeSA9IGBcbiAgICBxdWVyeSB1c3VhcmlvKCRpbnB1dDogSWRJbnB1dCEpIHtcbiAgICAgICAgZ2V0VXNlcihpbnB1dDogJGlucHV0KSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICB9XG4gICAgfVxuICAgIGBcblxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCcsIHF1ZXJ5LCB2YXJpYWJsZXMpXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbiAodXNlcikge3NldFVzZXJUb2tlbih1c2VyKX0pXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXJcbiAgICAgICAgICAgICAgICBpZihmaXJzdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyVG9rZW4gPSBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlclRva2VuKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0VXNlcigpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBjb250ZW50ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3VzZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzkzYTliNVwiLCBmb250U2l6ZTogXCIxcmVtXCIsIGJvcmRlckJvdHRvbTogXCIxcHggI2U1ZWRlZiBzb2xpZFwiLCBwYWRkaW5nQm90dG9tOiBcIjAuNXJlbVwiIH19IGNsYXNzTmFtZT1cImNsaWNrXCI+UGVyZmlsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiI2ZmNGQ0ZlwiLCBmb250U2l6ZTogXCIxcmVtXCIsIHBhZGRpbmdUb3A6IFwiMC41cmVtXCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIiBvbkNsaWNrPXsoKSA9PiBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpfT5DZXJyYXIgc2VzacOzbjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshdXNlciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjOTNhOWI1XCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgYm9yZGVyQm90dG9tOiBcIjFweCAjZTVlZGVmIHNvbGlkXCIsIHBhZGRpbmdCb3R0b206IFwiMC41cmVtXCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3VzZXIvbG9naW4nKX0+SW5pY2lhciBTZXNpw7NuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiI2ZmNGQ0ZlwiLCBmb250U2l6ZTogXCIxcmVtXCIsIHBhZGRpbmdUb3A6IFwiMC41cmVtXCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3VzZXIvcmVnaXN0ZXInKX0+UmVnaXN0cmFyc2U8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IHRpdGxlID0gKCkgPT4ge1xuICAgICAgICBpZih1c2VyKSByZXR1cm4gPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjOTNhOWI1XCIgfX0+e3VzZXJ9PC9kaXY+XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPFBvcG92ZXIgY29udGVudD17Y29udGVudH0gcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e3RpdGxlKCl9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiLCBjb2xvcjogXCIjOTNhOWI1XCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user.js\n");

/***/ })

})