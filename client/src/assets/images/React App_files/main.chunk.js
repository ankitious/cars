(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_commons_header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/commons/header/Header */ "./src/components/commons/header/Header.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/actions */ "./src/store/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/Home */ "./src/components/home/Home.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_detail_Details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/detail/Details */ "./src/components/detail/Details.js");
/* harmony import */ var _components_page404_Page404__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page404/Page404 */ "./src/components/page404/Page404.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style */ "./src/style.js");





var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/App.js";












var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchCars();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_commons_header_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/",
        component: _components_home_Home__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: "/car/:id",
        component: _components_detail_Details__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        component: _components_page404_Page404__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapDispatchToProps = {
  fetchCars: _store_actions__WEBPACK_IMPORTED_MODULE_8__["fetchCars"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/api/fetchCars.js":
/*!******************************!*\
  !*** ./src/api/fetchCars.js ***!
  \******************************/
/*! exports provided: fetchCars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCars", function() { return fetchCars; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var CARS_ENDPOINT = '/cars';
function fetchCars(params) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(CARS_ENDPOINT, "?").concat(params));
}

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.dfb6eaff.png";

/***/ }),

/***/ "./src/assets/images/sort-down.png":
/*!*****************************************!*\
  !*** ./src/assets/images/sort-down.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA6SURBVEhLYxgFo2AUjADQAMT/CWCQGooAPksoNhwGsFlCNcNhANkSqhsOAyCDaWb4KBgFo4AswMAAAA9IGO2BZz8fAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/sort-up.png":
/*!***************************************!*\
  !*** ./src/assets/images/sort-up.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA3SURBVEhLYxgFo2AUDD5QD8U0ASCD/0Mx1S1BNpzqlmAzHIYptgSf4TBMNZ+MglEwCgYnYGAAADg0GOPNRWqBAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/components/commons/dropdown/Dropdown.js":
/*!*****************************************************!*\
  !*** ./src/components/commons/dropdown/Dropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/components/commons/dropdown/style.js");
/* harmony import */ var _assets_images_sort_up_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/sort-up.png */ "./src/assets/images/sort-up.png");
/* harmony import */ var _assets_images_sort_up_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_sort_up_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_sort_down_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/sort-down.png */ "./src/assets/images/sort-down.png");
/* harmony import */ var _assets_images_sort_down_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_sort_down_png__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/components/commons/dropdown/Dropdown.js";





var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dropdown, _React$Component);

  function Dropdown() {
    var _this;

    Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dropdown);

    _this = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dropdown).call(this));

    _this.onToggle = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    _this.handleDocumentClick = function (e) {
      if (!_this.node.contains(e.target)) {
        _this.setState({
          isOpen: false
        });
      }
    };

    _this.onSelect = function (e) {
      _this.setState({
        selectedItem: e.target.textContent
      });

      _this.props.selection(e.target.textContent);

      _this.onToggle();
    };

    _this.state = {
      isOpen: false,
      selectedItem: ''
    };
    return _this;
  }

  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dropdown, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      document.addEventListener('mousedown', this.handleDocumentClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleDocumentClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          name = _this$props.name,
          list = _this$props.list,
          placeholder = _this$props.placeholder;
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          selectedItem = _this$state.selectedItem;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.node = node;
        },
        style: {
          margin: "8px 0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          fontSize: '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["DropdownContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Select"], {
        onClick: this.onToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, !!selectedItem ? selectedItem : placeholder, isOpen ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_images_sort_up_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        style: {
          opacity: '0.5'
        },
        alt: "sort up icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_images_sort_down_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        style: {
          opacity: '0.5'
        },
        alt: "sort down icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), isOpen && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["OptionsContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, list.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Option"], {
          key: index,
          onClick: _this2.onSelect,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, item);
      }))));
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./src/components/commons/dropdown/style.js":
/*!**************************************************!*\
  !*** ./src/components/commons/dropdown/style.js ***!
  \**************************************************/
/*! exports provided: DropdownContainer, Select, Option, OptionsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownContainer", function() { return DropdownContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsContainer", function() { return OptionsContainer; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: #ffffff;\n    overflow: hidden;\n    position: absolute;\n    border: 1px solid #EDEDED;\n    border-top: none;\n    width: 99%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);\n    z-index: 1000;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border-bottom : 1px solid #EDEDED;\n    padding: 8px;\n    \n    &:hover {\n      background-color : #ea7f38;\n      color : #fff;    \n    }\n    \n     &:active {\n      background-color : #D37324;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    padding: 8px;\n    box-shadow: inset 0 0 0 1px #EDEDED;\n    transition: color 0.25s;\n    align-items : center;\n    position: relative;\n    vertical-align: middle;\n\n  &::before,\n  &::after {\n    box-sizing: inherit;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 1px solid transparent;\n    width: 0;\n    height: 0;\n  }\n\n  &::before {\n    top: 0;\n    left: -1px;\n  }\n  \n  &::after {\n    bottom: 0;\n    right: -1px;\n  }\n  \n  &:hover::before,\n  &:hover::after {\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover::before {\n    border-top-color: #EA7F28; \n    border-right-color: #EA7F28;\n    transition:\n      width 0.25s ease-out, \n      height 0.25s ease-out 0.25s; \n  }\n\n  &:hover::after {\n    border-bottom-color: #EA7F28; \n    border-left-color: #EA7F28;\n    transition:\n      border-color 0s ease-out 0.5s, \n      width 0.25s ease-out 0.5s, \n      height 0.25s ease-out 0.75s; \n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   position : relative;\n   margin-top: 2%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Select = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Option = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var OptionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());

/***/ }),

/***/ "./src/components/commons/header/Header.js":
/*!*************************************************!*\
  !*** ./src/components/commons/header/Header.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/commons/header/style.js");
var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/components/commons/header/Header.js";




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["HeaderContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["LogoImageContainer"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["LogoImage"], {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["HeaderButtonsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["PurchaseButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Purchase"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["MyOrdersButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "My Orders"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["SellButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Sell")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/commons/header/style.js":
/*!************************************************!*\
  !*** ./src/components/commons/header/style.js ***!
  \************************************************/
/*! exports provided: HeaderContainer, LogoImageContainer, LogoImage, HeaderButtonsContainer, PurchaseButton, MyOrdersButton, SellButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImageContainer", function() { return LogoImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImage", function() { return LogoImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderButtonsContainer", function() { return HeaderButtonsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseButton", function() { return PurchaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersButton", function() { return MyOrdersButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellButton", function() { return SellButton; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom_es_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom/es/Link */ "./node_modules/react-router-dom/es/Link.js");


function _templateObject7() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   margin: 0px 12px;\n   cursor : pointer;\n   \n   &:hover {\n     color : #4A4A4A;\n   }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display : flex;\n    color : #4a4a4a;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 60%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 12px 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   display : flex;\n   justify-content : space-between;\n   align-items: center;\n   padding : 12px 8px;\n   border-bottom : 1px solid #EDEDED;\n   box-sizing: border-box;\n   height: 80px;\n   font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var LogoImageContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom_es_Link__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject2());
var LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());
var HeaderButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var PurchaseButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var MyOrdersButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(PurchaseButton)(_templateObject6());
var SellButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(PurchaseButton)(_templateObject7());

/***/ }),

/***/ "./src/components/detail/Details.js":
/*!******************************************!*\
  !*** ./src/components/detail/Details.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_car_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/car/style */ "./src/components/home/car/style.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility */ "./src/utility/index.js");
var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/components/detail/Details.js";




var Detail = function Detail(props) {
  console.log(props.match.params);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home_car_style__WEBPACK_IMPORTED_MODULE_1__["CarInformation"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ }),

/***/ "./src/components/home/Home.js":
/*!*************************************!*\
  !*** ./src/components/home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/home/style.js");
/* harmony import */ var _filters_Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/Filters */ "./src/components/home/filters/Filters.js");
/* harmony import */ var _section_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section/Section */ "./src/components/home/section/Section.js");
var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/components/home/Home.js";





var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Main"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filters_Filters__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_section_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/home/car/Car.js":
/*!****************************************!*\
  !*** ./src/components/home/car/Car.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/home/car/style.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility */ "./src/utility/index.js");
var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/components/home/car/Car.js";




var Car = function Car(_ref) {
  var stockNumber = _ref.stockNumber,
      modelName = _ref.modelName,
      manufacturerName = _ref.manufacturerName,
      color = _ref.color,
      _ref$mileage = _ref.mileage,
      number = _ref$mileage.number,
      unit = _ref$mileage.unit,
      fuelType = _ref.fuelType,
      pictureUrl = _ref.pictureUrl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["CarContainer"], {
    key: modelName + ' ' + stockNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["CarImageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["CarImage"], {
    src: pictureUrl,
    alt: manufacturerName + ' ' + modelName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["CarInformation"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["CarHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, manufacturerName + ' ' + modelName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '14px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " Stock # ", stockNumber, " - ", number + ' ' + unit, " - ", fuelType, " - ", Object(_utility__WEBPACK_IMPORTED_MODULE_2__["capitalize"])(color), "  "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["DetailsLink"], {
    to: "car/" + modelName + " " + stockNumber,
    state: stockNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, " View details")));
};

/* harmony default export */ __webpack_exports__["default"] = (Car);

/***/ }),

/***/ "./src/components/home/car/style.js":
/*!******************************************!*\
  !*** ./src/components/home/car/style.js ***!
  \******************************************/
/*! exports provided: CarContainer, CarImage, CarHeader, CarInformation, CarImageContainer, DetailsLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarContainer", function() { return CarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarImage", function() { return CarImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarHeader", function() { return CarHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarInformation", function() { return CarInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarImageContainer", function() { return CarImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsLink", function() { return DetailsLink; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");


function _templateObject6() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-decoration : none;\n    color : #ea7f38;\n    font-size: 14px;\n    \n     &:active {\n      color : #D37324;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 8px;\n    margin-right: 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   line-height : 30px;\n   padding : 0px 8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   margin : 0;\n   color : #4f4f4f;\n   font-size : 18px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   width : 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   display : flex;\n   align-items : center;\n   padding : 8px;\n   border : 1px solid #EDEDED;\n   margin-bottom : 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var CarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var CarImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject2());
var CarHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject3());
var CarInformation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var CarImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var DetailsLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])(_templateObject6());

/***/ }),

/***/ "./src/components/home/filters/Filters.js":
/*!************************************************!*\
  !*** ./src/components/home/filters/Filters.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/components/home/filters/style.js");
/* harmony import */ var _commons_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commons/dropdown/Dropdown */ "./src/components/commons/dropdown/Dropdown.js");
/* harmony import */ var _utility_constants_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utility/constants/colors */ "./src/utility/constants/colors.js");
/* harmony import */ var _utility_constants_manufacturers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utility/constants/manufacturers */ "./src/utility/constants/manufacturers.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/components/home/filters/Filters.js";








var Filters =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Filters, _React$Component);

  function Filters(props) {
    var _this;

    Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Filters);

    _this = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Filters).call(this, props));

    _this.colorSelection = function (color) {
      _this.setState({
        color: color
      });
    };

    _this.manufacturerSelection = function (manufacturer) {
      _this.setState({
        manufacturer: manufacturer
      });
    };

    _this.filterCars = function () {
      var filterCarsByParams = _this.props.filterCarsByParams;
      var _this$state = _this.state,
          color = _this$state.color,
          manufacturer = _this$state.manufacturer;
      filterCarsByParams(color, manufacturer);
    };

    _this.state = {
      color: null,
      manufacturer: null
    };
    return _this;
  }

  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Filters, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["FiltersContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["FilterByColorContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_commons_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
        list: _utility_constants_colors__WEBPACK_IMPORTED_MODULE_8__["colors"],
        name: "Color",
        placeholder: "All Car Colors",
        selection: this.colorSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["FilterByManufactuersContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_commons_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
        list: _utility_constants_manufacturers__WEBPACK_IMPORTED_MODULE_9__["manufacturers"],
        name: "Manufacturer",
        placeholder: "All manufacturers",
        selection: this.manufacturerSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["FilterButton"], {
        onClick: this.filterCars,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, " Filter"));
    }
  }]);

  return Filters;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapDispatchToProps = {
  filterCarsByParams: _store_actions__WEBPACK_IMPORTED_MODULE_10__["filterCarsByParams"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(null, mapDispatchToProps)(Filters));

/***/ }),

/***/ "./src/components/home/filters/style.js":
/*!**********************************************!*\
  !*** ./src/components/home/filters/style.js ***!
  \**********************************************/
/*! exports provided: FiltersContainer, FilterByColorContainer, FilterByManufactuersContainer, FilterButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersContainer", function() { return FiltersContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByColorContainer", function() { return FilterByColorContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByManufactuersContainer", function() { return FilterByManufactuersContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterButton", function() { return FilterButton; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: #ea7f38;\n    color: #fff;\n    width: 128px;\n    align-items : center;\n    justify-content : center;\n    height : 32px;\n    display : flex;\n    float: right;\n    margin-top: 5%;\n    cursor: pointer;\n    padding: 0px 8px;\n    \n    &:active {\n      background-color : #D37324;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 25%;\n    height: 210px;\n    margin: 24px;\n    padding: 24px;\n    border: 1px solid #EDEDED;\n    font-size : 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FiltersContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var FilterByColorContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var FilterByManufactuersContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());

/***/ }),

/***/ "./src/components/home/pagination/Pagination.js":
/*!******************************************************!*\
  !*** ./src/components/home/pagination/Pagination.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./src/components/home/pagination/style.js");





var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/components/home/pagination/Pagination.js";





var totalPageCountProp = Object(ramda__WEBPACK_IMPORTED_MODULE_7__["prop"])('totalPageCount');

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Pagination, _React$Component);

  function Pagination(props) {
    var _this;

    Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pagination);

    _this = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Pagination).call(this, props));

    _this.firstPage = function () {
      var currentPage = _this.state.currentPage;
      var changePage = _this.props.changePage;

      if (currentPage !== 1) {
        changePage(1);

        _this.setState({
          currentPage: 1
        });
      }
    };

    _this.lastPage = function () {
      var currentPage = _this.state.currentPage;
      var _this$props = _this.props,
          changePage = _this$props.changePage,
          cars = _this$props.cars;

      if (currentPage !== totalPageCountProp(cars)) {
        changePage(totalPageCountProp(cars));

        _this.setState({
          currentPage: totalPageCountProp(cars)
        });
      }
    };

    _this.nextPage = function () {
      var currentPage = _this.state.currentPage;
      var _this$props2 = _this.props,
          changePage = _this$props2.changePage,
          cars = _this$props2.cars;

      if (!Object(ramda__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(cars) && Math.ceil(totalPageCountProp(cars)) > currentPage) {
        changePage(currentPage + 1);

        _this.setState({
          currentPage: currentPage + 1
        });
      }
    };

    _this.previousPage = function () {
      var currentPage = _this.state.currentPage;
      var changePage = _this.props.changePage;

      if (currentPage > 1) {
        changePage(currentPage - 1);

        _this.setState({
          currentPage: currentPage - 1
        });
      }
    };

    _this.state = {
      currentPage: 1,
      carsPerPage: 10
    };
    return _this;
  }

  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pagination, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var totalPageCount = nextProps.cars.totalPageCount;

      if (totalPageCount < this.state.currentPage) {
        this.setState({
          currentPage: 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var fetchedCarsData = this.props.cars;
      var currentPage = this.state.currentPage;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_9__["PaginationContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_9__["PaginationItem"], {
        onClick: this.firstPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "First"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_9__["PaginationItem"], {
        onClick: this.previousPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Previous"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_9__["PaginationItem"], {
        pageNoText: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Page ", currentPage, " of ", Math.ceil(totalPageCountProp(fetchedCarsData))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_9__["PaginationItem"], {
        onClick: this.nextPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Next"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_9__["PaginationItem"], {
        onClick: this.lastPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Last"));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
var mapDispatchToProps = {
  changePage: _store_actions__WEBPACK_IMPORTED_MODULE_8__["changePage"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(Pagination));

/***/ }),

/***/ "./src/components/home/pagination/style.js":
/*!*************************************************!*\
  !*** ./src/components/home/pagination/style.js ***!
  \*************************************************/
/*! exports provided: PaginationContainer, PaginationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationContainer", function() { return PaginationContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationItem", function() { return PaginationItem; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding : 8px 12px;\n  margin : 0px 12px;\n  color : ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display : flex;\n  justify-content: center;\n  align-items : center;\n  font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PaginationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var PaginationItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), function (props) {
  return !!props.pageNoText ? '#4A4A4A' : '#EA7F38';
});

/***/ }),

/***/ "./src/components/home/section/Section.js":
/*!************************************************!*\
  !*** ./src/components/home/section/Section.js ***!
  \************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/components/home/section/style.js");
/* harmony import */ var _commons_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commons/dropdown/Dropdown */ "./src/components/commons/dropdown/Dropdown.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _car_Car__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../car/Car */ "./src/components/home/car/Car.js");
/* harmony import */ var _pagination_Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pagination/Pagination */ "./src/components/home/pagination/Pagination.js");
/* harmony import */ var _utility_constants_sortByMileage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utility/constants/sortByMileage */ "./src/utility/constants/sortByMileage.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/actions */ "./src/store/actions/index.js");





var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/components/home/section/Section.js";









var CarList = Object(ramda__WEBPACK_IMPORTED_MODULE_8__["map"])(_car_Car__WEBPACK_IMPORTED_MODULE_10__["default"]);
var carsProp = Object(ramda__WEBPACK_IMPORTED_MODULE_8__["prop"])('cars');
var totalPageCountProp = Object(ramda__WEBPACK_IMPORTED_MODULE_8__["prop"])('totalPageCount');
var displayCars = Object(ramda__WEBPACK_IMPORTED_MODULE_8__["compose"])(CarList, carsProp);
var gt1 = Object(ramda__WEBPACK_IMPORTED_MODULE_8__["gt"])(ramda__WEBPACK_IMPORTED_MODULE_8__["__"], 1);
var numberOfCarsOnPage = Object(ramda__WEBPACK_IMPORTED_MODULE_8__["ifElse"])(Object(ramda__WEBPACK_IMPORTED_MODULE_8__["compose"])(gt1, totalPageCountProp), Object(ramda__WEBPACK_IMPORTED_MODULE_8__["always"])(10), Object(ramda__WEBPACK_IMPORTED_MODULE_8__["compose"])(ramda__WEBPACK_IMPORTED_MODULE_8__["length"], carsProp));
var totalCars = Object(ramda__WEBPACK_IMPORTED_MODULE_8__["ifElse"])(Object(ramda__WEBPACK_IMPORTED_MODULE_8__["compose"])(gt1, totalPageCountProp), Object(ramda__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(ramda__WEBPACK_IMPORTED_MODULE_8__["multiply"])(10), totalPageCountProp), Object(ramda__WEBPACK_IMPORTED_MODULE_8__["compose"])(ramda__WEBPACK_IMPORTED_MODULE_8__["length"], carsProp));

var updateSortValue = function updateSortValue(v) {
  return {
    "Mileage - Ascending": "asc",
    "Mileage - Descending": "des"
  }[v];
};

var Section =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Section, _React$Component);

  function Section() {
    Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Section);

    return Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Section).apply(this, arguments));
  }

  Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Section, [{
    key: "sortSelection",
    value: function sortSelection(v) {
      var sortByMileage = this.props.sortByMileage;
      Object(ramda__WEBPACK_IMPORTED_MODULE_8__["compose"])(sortByMileage, updateSortValue)(v);
    }
  }, {
    key: "render",
    value: function render() {
      var fetchedCarsData = this.props.cars;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["SectionContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["SectionHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        style: {
          fontSize: '18px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, " Available Cars "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          fontSize: '18px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, " Showing ", numberOfCarsOnPage(fetchedCarsData), " of ", totalCars(fetchedCarsData), " results ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          width: '40%',
          fontSize: '14px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_commons_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
        list: _utility_constants_sortByMileage__WEBPACK_IMPORTED_MODULE_12__["sort"],
        name: "Sort By",
        placeholder: "None",
        selection: this.sortSelection.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["SectionBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, !Object(ramda__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(fetchedCarsData) && displayCars(fetchedCarsData)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pagination_Pagination__WEBPACK_IMPORTED_MODULE_11__["default"], {
        cars: fetchedCarsData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }));
    }
  }]);

  return Section;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  var carsData = state.cars;

  var _ref = carsData || {
    fetching: true,
    cars: {}
  },
      fetching = _ref.fetching,
      cars = _ref.cars,
      error = _ref.error;

  return {
    fetching: fetching,
    cars: cars,
    error: error
  };
};
var mapDispatchToProps = {
  sortByMileage: _store_actions__WEBPACK_IMPORTED_MODULE_13__["sortByMileage"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Section));

/***/ }),

/***/ "./src/components/home/section/style.js":
/*!**********************************************!*\
  !*** ./src/components/home/section/style.js ***!
  \**********************************************/
/*! exports provided: SectionContainer, SectionBody, SectionHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionContainer", function() { return SectionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBody", function() { return SectionBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeader", function() { return SectionHeader; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject3() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    \n    display : flex;\n    justify-content : space-between;\n    align-items : baseline;\n    padding-bottom: 24px;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   \n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n width : 66%;\n margin: 0px 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var SectionBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());

/***/ }),

/***/ "./src/components/home/style.js":
/*!**************************************!*\
  !*** ./src/components/home/style.js ***!
  \**************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   display : flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/components/page404/Page404.js":
/*!*******************************************!*\
  !*** ./src/components/page404/Page404.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/page404/style.js");
var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/components/page404/Page404.js";





var Page404 = function Page404() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Page404Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: 'Auto1 Logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "404 - Not Found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Sorry, the page you are looking for does not exist."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "You can always go back to the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "homepage"), "."));
};

/* harmony default export */ __webpack_exports__["default"] = (Page404);

/***/ }),

/***/ "./src/components/page404/style.js":
/*!*****************************************!*\
  !*** ./src/components/page404/style.js ***!
  \*****************************************/
/*! exports provided: Page404Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Container", function() { return Page404Container; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   display :flex;\n   flex-direction : column;\n   align-items : center;\n   justify-content : center;\n   height : 500px\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Page404Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
var _jsxFileName = "/Users/ankit/Slashes/auto1-task/client/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_5__["store"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: getCars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCars", function() { return getCars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _api_fetchCars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/fetchCars */ "./src/api/fetchCars.js");
/* harmony import */ var _store_actions_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/constants */ "./src/store/actions/constants.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");


var _marked =
/*#__PURE__*/
_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getCars),
    _marked2 =
/*#__PURE__*/
_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchGetCars),
    _marked3 =
/*#__PURE__*/
_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);









var getParams = function getParams(state) {
  return state.filterParams;
};

var sanitizeParams = function sanitizeParams(params) {
  return Object(_utility__WEBPACK_IMPORTED_MODULE_7__["haveValues"])(params) ? Object(ramda__WEBPACK_IMPORTED_MODULE_6__["compose"])(query_string__WEBPACK_IMPORTED_MODULE_5__["stringify"], _utility__WEBPACK_IMPORTED_MODULE_7__["removeNulls"])(params) : "";
};

function getCars() {
  var params, _queryString, response;

  return _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getCars$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(getParams);

        case 3:
          params = _context.sent;
          _queryString = sanitizeParams(params);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api_fetchCars__WEBPACK_IMPORTED_MODULE_3__["fetchCars"], _queryString);

        case 7:
          response = _context.sent;
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__["fetchCarsSuccess"])(response.data));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__["fetchCarsFailure"])(_context.t0));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 12]]);
}

function watchGetCars() {
  return _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchGetCars$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_store_actions_constants__WEBPACK_IMPORTED_MODULE_4__["FETCH_CARS_REQUEST"], getCars);

        case 2:
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_store_actions_constants__WEBPACK_IMPORTED_MODULE_4__["FILTER_CARS_BY_PARAMS"], getCars);

        case 4:
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_store_actions_constants__WEBPACK_IMPORTED_MODULE_4__["CHANGE_PAGE"], getCars);

        case 6:
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_store_actions_constants__WEBPACK_IMPORTED_MODULE_4__["SORT_BY_MILEAGE"], getCars);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function rootSaga() {
  return _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchGetCars);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store/actions/constants.js":
/*!****************************************!*\
  !*** ./src/store/actions/constants.js ***!
  \****************************************/
/*! exports provided: FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS, FETCH_CARS_FAILURE, FILTER_CARS_BY_PARAMS, CHANGE_PAGE, SORT_BY_MILEAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARS_REQUEST", function() { return FETCH_CARS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARS_SUCCESS", function() { return FETCH_CARS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARS_FAILURE", function() { return FETCH_CARS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CARS_BY_PARAMS", function() { return FILTER_CARS_BY_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PAGE", function() { return CHANGE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_BY_MILEAGE", function() { return SORT_BY_MILEAGE; });
var FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
var FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
var FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';
var FILTER_CARS_BY_PARAMS = 'FILTER_CARS_BY_PARAMS';
var CHANGE_PAGE = 'CHANGE_PAGE';
var SORT_BY_MILEAGE = 'SORT_BY_MILEAGE';

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: fetchCars, fetchCarsSuccess, fetchCarsFailure, filterCarsByParams, changePage, sortByMileage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCars", function() { return fetchCars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCarsSuccess", function() { return fetchCarsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCarsFailure", function() { return fetchCarsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCarsByParams", function() { return filterCarsByParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePage", function() { return changePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByMileage", function() { return sortByMileage; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/store/actions/constants.js");

function fetchCars() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_CARS_REQUEST"]
  };
}
function fetchCarsSuccess(cars) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_CARS_SUCCESS"],
    cars: cars
  };
}
function fetchCarsFailure(error) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_CARS_FAILURE"],
    error: error
  };
}
function filterCarsByParams(color, manufacturer) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FILTER_CARS_BY_PARAMS"],
    color: color,
    manufacturer: manufacturer
  };
}
function changePage(page) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PAGE"],
    page: page
  };
}
function sortByMileage(sort) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SORT_BY_MILEAGE"],
    sort: sort
  };
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sagas */ "./src/sagas/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");




var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_3__["default"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/store/reducers/cars.js":
/*!************************************!*\
  !*** ./src/store/reducers/cars.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/constants */ "./src/store/actions/constants.js");


var initialState = {
  fetching: false,
  cars: {},
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      cars = action.cars,
      error = action.error;

  switch (type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_CARS_REQUEST"]:
      return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["evolve"])({
        fetching: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(true)
      }, state);

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_CARS_SUCCESS"]:
      return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["evolve"])({
        fetching: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(false),
        cars: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(cars)
      }, state);

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_CARS_FAILURE"]:
      return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["evolve"])({
        fetching: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(false),
        error: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(error)
      }, state);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/filterParams.js":
/*!********************************************!*\
  !*** ./src/store/reducers/filterParams.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/constants */ "./src/store/actions/constants.js");


var initialState = {
  color: null,
  manufacturer: null,
  page: null,
  sort: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      color = action.color,
      manufacturer = action.manufacturer,
      page = action.page,
      sort = action.sort;

  switch (type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["FILTER_CARS_BY_PARAMS"]:
      return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["evolve"])({
        color: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(color),
        manufacturer: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(manufacturer),
        page: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(null)
      }, state);

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PAGE"]:
      return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["evolve"])({
        page: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(page)
      }, state);

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["SORT_BY_MILEAGE"]:
      return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["evolve"])({
        sort: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["always"])(sort)
      }, state);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cars */ "./src/store/reducers/cars.js");
/* harmony import */ var _filterParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterParams */ "./src/store/reducers/filterParams.js");



var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  cars: _cars__WEBPACK_IMPORTED_MODULE_1__["default"],
  filterParams: _filterParams__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: Main, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: 'Roboto', sans-serif;\n  color : #4A4A4A;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ankit_Slashes_auto1_task_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   display : flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());

/***/ }),

/***/ "./src/utility/constants/colors.js":
/*!*****************************************!*\
  !*** ./src/utility/constants/colors.js ***!
  \*****************************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var colors = ["Red", "Blue", "Green", "Black", "Yellow", "White", "Silver"];

/***/ }),

/***/ "./src/utility/constants/manufacturers.js":
/*!************************************************!*\
  !*** ./src/utility/constants/manufacturers.js ***!
  \************************************************/
/*! exports provided: manufacturers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturers", function() { return manufacturers; });
var manufacturers = ["Audi", "BMW", "Chrysler", "Dodge", "Fiat", "Mercedes-Benz", "Porsche", "Skoda", "Tesla", "Volkswagen"];

/***/ }),

/***/ "./src/utility/constants/sortByMileage.js":
/*!************************************************!*\
  !*** ./src/utility/constants/sortByMileage.js ***!
  \************************************************/
/*! exports provided: sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
var sort = ["Mileage - Ascending", "Mileage - Descending"];

/***/ }),

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: haveValues, removeNulls, capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "haveValues", function() { return haveValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNulls", function() { return removeNulls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

function haveValues(target) {
  return !!Object.values(target).find(function (v) {
    return v !== null;
  });
}
function removeNulls(obj) {
  var newObj = {};

  for (var key in obj) {
    if (obj[key] !== null) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
var capitalize = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["join"])(''), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["juxt"])([Object(ramda__WEBPACK_IMPORTED_MODULE_0__["compose"])(ramda__WEBPACK_IMPORTED_MODULE_0__["toUpper"], ramda__WEBPACK_IMPORTED_MODULE_0__["head"]), ramda__WEBPACK_IMPORTED_MODULE_0__["tail"]]));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ankit/Slashes/auto1-task/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ankit/Slashes/auto1-task/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map