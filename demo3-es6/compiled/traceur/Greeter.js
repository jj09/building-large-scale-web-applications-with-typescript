"use strict";
var Greeter = (function() {
  function Greeter(message) {
    this.message = message;
  }
  return ($traceurRuntime.createClass)(Greeter, {greet: function() {
      var element = document.querySelector('#message');
      element.textContent = this.message;
    }}, {});
}());
var greeter = new Greeter('Hello World!');
greeter.greet();
