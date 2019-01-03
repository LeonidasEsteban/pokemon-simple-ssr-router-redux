"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pokemon = function Pokemon(_ref) {
  var name = _ref.name,
      sprites = _ref.sprites;
  return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Nombre: ", name, " x"), _react.default.createElement("img", {
    src: sprites.front_default,
    alt: ""
  }));
};

var _default = Pokemon;
exports.default = _default;