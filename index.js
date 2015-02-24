"use strict";

var curry2 = require("fj-curry").curry2;



var timeout = function (duration, func) {
  return window.setTimeout(func, duration);
};

module.exports = curry2(timeout);