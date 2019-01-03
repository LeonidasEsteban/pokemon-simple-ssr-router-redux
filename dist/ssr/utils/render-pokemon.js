"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var api = require('./api');

var body = require('./body');

var ssr = require('../../dist/ssr/utils/server-data');

var renderPokemonPage =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, pokemon;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return api.getPokemon(id);

          case 3:
            pokemon = _context.sent;

            if (pokemon) {
              res.send(body({
                title: 'Quien es ese pokemon',
                html: ssr(pokemon).content,
                css: 'styles',
                js: 'app'
              }));
            }

            res.send(body({
              html: 'no hay pokemon paila',
              css: 'styles',
              title: 'No hay Pokemon :('
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function renderPokemonPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = renderPokemonPage;