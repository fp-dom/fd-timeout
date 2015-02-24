# fd-timeout

[![Build Status](https://travis-ci.org/fp-dom/fd-timeout.svg)](https://travis-ci.org/fp-dom/fd-timeout) [![npm version](https://badge.fury.io/js/fd-timeout.svg)](http://badge.fury.io/js/fd-timeout)
> window.setTimeout FP-style

## Installation

`npm install fd-timeout --save`

## Usage

```js
var timeout = require('fd-timeout');

var after2s = timeout(2000);

after2s(function() {
  alert('FP rocks');
});
```
