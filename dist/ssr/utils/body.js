"use strict";

var renderJS = function renderJS(file) {
  if (file) {
    return "<script src=\"/dist/".concat(file, ".js\"></script>");
  }

  return '';
};

var body = function body(_ref) {
  var title = _ref.title,
      html = _ref.html,
      css = _ref.css,
      js = _ref.js;
  return "\n  <!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\"/>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"/>\n    <link rel=\"stylesheet\" href=\"/public/css/".concat(css, ".css\" />\n    <title>").concat(title, "</title>\n  </head>\n  <body>\n    <div id=\"app\">\n      ").concat(html, "\n    </div>\n    ").concat(renderJS(js), "\n  </body>\n  </html>\n");
};

module.exports = body;