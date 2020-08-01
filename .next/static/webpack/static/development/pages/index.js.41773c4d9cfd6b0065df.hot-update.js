webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/user.js":
/*!****************************!*\
  !*** ./components/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/src/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/iamcardonamhis/Desktop/tardan/shop/components/user.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var query = \"\\n    query usuario($input: IdInput!) {\\n        getUser(input: $input) {\\n            name\\n            email\\n        }\\n    }\\n    \";\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth().onAuthStateChanged(function (userToken) {\n      var variables = {\n        input: {\n          id: userToken.uid\n        }\n      };\n      Object(graphql_request__WEBPACK_IMPORTED_MODULE_5__[\"request\"])('http://localhost:4000/graphql', query, variables).then(data);\n    });\n  }, []);\n\n  var content = __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 21\n    }\n  }, \"Perfil\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth().signOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  }, \"Cerrar sesi\\xF3n\")), !user && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"#93a9b5\",\n      fontSize: \"1rem\",\n      borderBottom: \"1px #e5edef solid\",\n      paddingBottom: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/login');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"Iniciar Sesi\\xF3n\"), __jsx(\"div\", {\n    style: {\n      color: \"#ff4d4f\",\n      fontSize: \"1rem\",\n      paddingTop: \"0.5rem\"\n    },\n    className: \"click\",\n    onClick: function onClick() {\n      return router.push('/user/register');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }, \"Registrarse\")));\n\n  var title = function title() {\n    if (user) return __jsx(\"div\", {\n      style: {\n        color: \"#93a9b5\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 25\n      }\n    }, \"knk\");\n  };\n\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Popover\"], {\n    content: content,\n    placement: \"bottom\",\n    title: title(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      padding: \"1rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"UserOutlined\"], {\n    style: {\n      fontSize: \"1.5rem\",\n      color: \"#93a9b5\"\n    },\n    className: \"click\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  })));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIuanM/YzBhNCJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyVG9rZW4iLCJ2YXJpYWJsZXMiLCJpbnB1dCIsImlkIiwidWlkIiwicmVxdWVzdCIsInRoZW4iLCJkYXRhIiwiY29udGVudCIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInNpZ25PdXQiLCJwdXNoIiwidGl0bGUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSwyRUFBVztBQUFBOztBQUN0QixNQUFNQSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURzQixrQkFFRUMsc0RBQVEsQ0FBQyxJQUFELENBRlY7QUFBQSxNQUVmQyxJQUZlO0FBQUEsTUFFVEMsT0FGUzs7QUFJdEIsTUFBTUMsS0FBSywySUFBWDtBQVNBQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsMkRBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsa0JBQWhCLENBQW1DLFVBQVNDLFNBQVQsRUFBb0I7QUFDbkQsVUFBTUMsU0FBUyxHQUFHO0FBQ2RDLGFBQUssRUFBRTtBQUNIQyxZQUFFLEVBQUVILFNBQVMsQ0FBQ0k7QUFEWDtBQURPLE9BQWxCO0FBTUFDLHFFQUFPLENBQUMsK0JBQUQsRUFBa0NWLEtBQWxDLEVBQXlDTSxTQUF6QyxDQUFQLENBQTJESyxJQUEzRCxDQUFnRUMsSUFBaEU7QUFDSCxLQVJEO0FBU0gsR0FWUSxFQVVOLEVBVk0sQ0FBVDs7QUFZQSxNQUFNQyxPQUFPLEdBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZixJQUFJLElBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVnQixXQUFLLEVBQUUsU0FBVDtBQUFvQkMsY0FBUSxFQUFFLE1BQTlCO0FBQXNDQyxrQkFBWSxFQUFFLG1CQUFwRDtBQUF5RUMsbUJBQWEsRUFBRTtBQUF4RixLQUFaO0FBQWdILGFBQVMsRUFBQyxPQUExSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSTtBQUFLLFNBQUssRUFBRTtBQUFFSCxXQUFLLEVBQUUsU0FBVDtBQUFvQkMsY0FBUSxFQUFFLE1BQTlCO0FBQXNDRyxnQkFBVSxFQUFFO0FBQWxELEtBQVo7QUFBMEUsYUFBUyxFQUFDLE9BQXBGO0FBQTRGLFdBQU8sRUFBRTtBQUFBLGFBQU1oQix1REFBUSxDQUFDQyxJQUFULEdBQWdCZ0IsT0FBaEIsRUFBTjtBQUFBLEtBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosQ0FGUixFQU9LLENBQUNyQixJQUFELElBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVnQixXQUFLLEVBQUUsU0FBVDtBQUFvQkMsY0FBUSxFQUFFLE1BQTlCO0FBQXNDQyxrQkFBWSxFQUFFLG1CQUFwRDtBQUF5RUMsbUJBQWEsRUFBRTtBQUF4RixLQUFaO0FBQWdILGFBQVMsRUFBQyxPQUExSDtBQUFrSSxXQUFPLEVBQUU7QUFBQSxhQUFNdEIsTUFBTSxDQUFDeUIsSUFBUCxDQUFZLGFBQVosQ0FBTjtBQUFBLEtBQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFFSTtBQUFLLFNBQUssRUFBRTtBQUFFTixXQUFLLEVBQUUsU0FBVDtBQUFvQkMsY0FBUSxFQUFFLE1BQTlCO0FBQXNDRyxnQkFBVSxFQUFFO0FBQWxELEtBQVo7QUFBMEUsYUFBUyxFQUFDLE9BQXBGO0FBQTRGLFdBQU8sRUFBRTtBQUFBLGFBQU12QixNQUFNLENBQUN5QixJQUFQLENBQVksZ0JBQVosQ0FBTjtBQUFBLEtBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosQ0FSUixDQURKOztBQWlCQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCLFFBQUd2QixJQUFILEVBQVMsT0FBTztBQUFLLFdBQUssRUFBRTtBQUFFZ0IsYUFBSyxFQUFFO0FBQVQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWixHQUZEOztBQUdBLFNBQ0ksTUFBQyw0Q0FBRDtBQUFTLFdBQU8sRUFBRUQsT0FBbEI7QUFBMkIsYUFBUyxFQUFDLFFBQXJDO0FBQThDLFNBQUssRUFBRVEsS0FBSyxFQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFjLFNBQUssRUFBRTtBQUFFUCxjQUFRLEVBQUUsUUFBWjtBQUFzQkQsV0FBSyxFQUFFO0FBQTdCLEtBQXJCO0FBQStELGFBQVMsRUFBQyxPQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKO0FBT0giLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2VDb25maWcnXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBxdWVyeSA9IGBcbiAgICBxdWVyeSB1c3VhcmlvKCRpbnB1dDogSWRJbnB1dCEpIHtcbiAgICAgICAgZ2V0VXNlcihpbnB1dDogJGlucHV0KSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICB9XG4gICAgfVxuICAgIGBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24odXNlclRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJUb2tlbi51aWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsJywgcXVlcnksIHZhcmlhYmxlcykudGhlbihkYXRhIClcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dXNlciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjOTNhOWI1XCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgYm9yZGVyQm90dG9tOiBcIjFweCAjZTVlZGVmIHNvbGlkXCIsIHBhZGRpbmdCb3R0b206IFwiMC41cmVtXCIgfX0gY2xhc3NOYW1lPVwiY2xpY2tcIj5QZXJmaWw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjZmY0ZDRmXCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgcGFkZGluZ1RvcDogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIG9uQ2xpY2s9eygpID0+IGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCl9PkNlcnJhciBzZXNpw7NuPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyF1c2VyICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM5M2E5YjVcIiwgZm9udFNpemU6IFwiMXJlbVwiLCBib3JkZXJCb3R0b206IFwiMXB4ICNlNWVkZWYgc29saWRcIiwgcGFkZGluZ0JvdHRvbTogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdXNlci9sb2dpbicpfT5JbmljaWFyIFNlc2nDs248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjZmY0ZDRmXCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgcGFkZGluZ1RvcDogXCIwLjVyZW1cIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdXNlci9yZWdpc3RlcicpfT5SZWdpc3RyYXJzZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgdGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHVzZXIpIHJldHVybiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM5M2E5YjVcIiB9fT5rbms8L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8UG9wb3ZlciBjb250ZW50PXtjb250ZW50fSBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17dGl0bGUoKX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIsIGNvbG9yOiBcIiM5M2E5YjVcIiB9fSBjbGFzc05hbWU9XCJjbGlja1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user.js\n");

/***/ })

})