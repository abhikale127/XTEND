"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Clients1/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/Clients1/index.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_sections_clients1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/sections/clients1.json */ \"./src/data/sections/clients1.json\");\n/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Split */ \"./src/components/Split/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\nvar _this = undefined;\nvar Clients1 = function(param) {\n    var theme = param.theme, subBG = param.subBG;\n    var first = _data_sections_clients1_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, _data_sections_clients1_json__WEBPACK_IMPORTED_MODULE_2__.length / 2);\n    var second = _data_sections_clients1_json__WEBPACK_IMPORTED_MODULE_2__.slice(4, _data_sections_clients1_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: \"clients section-padding \".concat(subBG ? \"sub-bg\" : \"\"),\n        __source: {\n            fileName: \"C:\\\\Users\\\\Abhishek\\\\Desktop\\\\CloudPoint\\\\avo_react\\\\src\\\\components\\\\Clients1\\\\index.jsx\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                className: \"extra-title wow words chars splitting\",\n                \"data-splitting\": true,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Abhishek\\\\Desktop\\\\CloudPoint\\\\avo_react\\\\src\\\\components\\\\Clients1\\\\index.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"We help to create strategies, design & development.\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                id: \"About\",\n                src: \"/img/slid/5.png\",\n                alt: \"image\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Abhishek\\\\Desktop\\\\CloudPoint\\\\avo_react\\\\src\\\\components\\\\Clients1\\\\index.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = Clients1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clients1);\nvar _c;\n$RefreshReg$(_c, \"Clients1\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DbGllbnRzMS9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsRUFBOEMsNkNBQ3JCO0FBQ21DO0FBQ2hDOztBQUU1QixHQUFLLENBQUNHLFFBQVEsR0FBRyxRQUFRLFFBQWMsQ0FBQztRQUFwQkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEtBQUssU0FBTEEsS0FBSztJQUM5QixHQUFHLENBQUNDLEtBQUssR0FBR0wsK0RBQWtCLENBQUMsQ0FBQyxFQUFFQSxnRUFBbUIsR0FBRyxDQUFDO0lBQ3pELEdBQUcsQ0FBQ1EsTUFBTSxHQUFHUiwrREFBa0IsQ0FBQyxDQUFDLEVBQUVBLGdFQUFtQjtJQUN0RCxNQUFNLHVFQUNIUyxDQUFPO1FBQUNDLFNBQVMsRUFBRyxDQUF3QiwwQkFBd0IsT0FBdEJOLEtBQUssR0FBRyxDQUFRLFVBQUcsQ0FBRTs7Ozs7Ozs7aUZBQ2pFTyxDQUFFO2dCQUFDRCxTQUFTLEVBQUMsQ0FBdUM7Z0JBQUNFLENBQWM7Ozs7Ozs7MEJBQUMsQ0FFckU7O2lGQUNDQyxDQUFHO2dCQUFDQyxFQUFFLEVBQUMsQ0FBTztnQkFBQ0MsR0FBRyxFQUFDLENBQWlCO2dCQUFDQyxHQUFHLEVBQUMsQ0FBTzs7Ozs7Ozs7OztBQUd2RCxDQUFDO0tBWEtkLFFBQVE7QUFhZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NsaWVudHMxL2luZGV4LmpzeD82OTg1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2xpZW50czFEYXRhIGZyb20gXCIuLi8uLi9kYXRhL3NlY3Rpb25zL2NsaWVudHMxLmpzb25cIjtcclxuaW1wb3J0IFNwbGl0IGZyb20gXCIuLi9TcGxpdFwiO1xyXG5cclxuY29uc3QgQ2xpZW50czEgPSAoeyB0aGVtZSwgc3ViQkcgfSkgPT4ge1xyXG4gIHZhciBmaXJzdCA9IENsaWVudHMxRGF0YS5zbGljZSgwLCBDbGllbnRzMURhdGEubGVuZ3RoIC8gMik7XHJcbiAgdmFyIHNlY29uZCA9IENsaWVudHMxRGF0YS5zbGljZSg0LCBDbGllbnRzMURhdGEubGVuZ3RoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgY2xpZW50cyBzZWN0aW9uLXBhZGRpbmcgJHtzdWJCRyA/IFwic3ViLWJnXCIgOiBcIlwifWB9PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZXh0cmEtdGl0bGUgd293IHdvcmRzIGNoYXJzIHNwbGl0dGluZ1wiIGRhdGEtc3BsaXR0aW5nPlxyXG4gICAgICAgIFdlIGhlbHAgdG8gY3JlYXRlIHN0cmF0ZWdpZXMsIGRlc2lnbiAmIGRldmVsb3BtZW50LlxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8aW1nIGlkPVwiQWJvdXRcIiBzcmM9XCIvaW1nL3NsaWQvNS5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHMxO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDbGllbnRzMURhdGEiLCJTcGxpdCIsIkNsaWVudHMxIiwidGhlbWUiLCJzdWJCRyIsImZpcnN0Iiwic2xpY2UiLCJsZW5ndGgiLCJzZWNvbmQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJkYXRhLXNwbGl0dGluZyIsImltZyIsImlkIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Clients1/index.jsx\n");

/***/ })

});