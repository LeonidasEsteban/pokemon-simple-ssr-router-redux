"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _pokemon = _interopRequireDefault(require("./pokemon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.hydrate)(_react.default.createElement(_pokemon.default, {
  sprites: {},
  name: "leonidas"
}), document.querySelector('#app'));