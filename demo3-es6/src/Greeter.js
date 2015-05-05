class Greeter {
  constructor(message) {
    this.message = message;
  }

  greet() {
    let element = document.querySelector('#message');
    element.textContent = this.message;
  }
}

let greeter = new Greeter('Hello World!');
greeter.greet();