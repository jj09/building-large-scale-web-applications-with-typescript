var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Person = (function () {
    function Person(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Person.prototype.hello = function () {
        return "Hello " + this.firstName + " " + this.lastName;
    };
    Person.prototype.print = function () {
        console.log(this.hello());
    };
    return Person;
})();
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(fName, lName, salary) {
        _super.call(this, fName, lName);
        this.salary = salary;
    }
    Developer.prototype.hello = function () {
        return _super.prototype.hello.call(this) + " ($" + this.salary + ")";
    };
    return Developer;
})(Person);
var p = new Developer("Jakub", "Jedryszek", 1000000);
p.print();
