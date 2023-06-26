"use strict";

var _interopRequireDefault = require("/Users/mikasa/Desktop/library-react/mik-modal/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
var _jsxRuntime = require("react/jsx-runtime");
function Modal(_ref) {
  var title = _ref.title,
    closeModal = _ref.closeModal,
    isOpened = _ref.isOpened;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: isOpened && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal-window",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-body",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: closeModal,
          className: "modal-close"
        })]
      })
    })
  });
}
var _default = Modal;
exports.default = _default;