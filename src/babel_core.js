var es6 = "let x = n => n + 1";
var es5 = require("babel-core").transform(es6, {
  // plugins: ['transform-es2015-arrow-functions'],
  //presets: ["es2015"]
}).code;
console.log(es5);

// node ./src/babel_core.js
// node src/babel_core.js
// node src/babel_core

// work by either using plugin or preset. No .babelrc is required
/* output
"use strict";
var x = function x(n) {
  return n + 1;
};
*/
