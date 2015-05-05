'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Greeter = (function () {
  function Greeter(message) {
    _classCallCheck(this, Greeter);

    this.message = message;
  }

  _createClass(Greeter, [{
    key: 'greet',
    value: function greet() {
      var element = document.querySelector('#message');
      element.textContent = this.message;
    }
  }]);

  return Greeter;
})();

var greeter = new Greeter('Hello World!');
greeter.greet();