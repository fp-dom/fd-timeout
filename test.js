"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var sinon = _interopRequire(require("sinon"));

var timeout = _interopRequire(require("./"));




it("fd-timeout", function () {
  assert.equal(typeof timeout, "function");
  assert.equal(typeof timeout(2), "function");

  var spy = sinon.spy();
  var clock = sinon.useFakeTimers();

  timeout(2000)(spy);

  clock.tick(1999);
  assert(spy.notCalled);

  clock.tick(2000);
  assert(spy.called);
});