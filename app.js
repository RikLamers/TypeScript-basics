"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 21;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Old guy');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Rik Lamers', 'Rikkerdt');
console.log(person);
person.printAge();
// person.setType('Cool guy');
// INHERITANCE
var Rik = /** @class */ (function (_super) {
    __extends(Rik, _super);
    function Rik(username) {
        var _this = _super.call(this, 'Rik', username) || this;
        _this.name = 'Rik';
        _this.age = 19;
        return _this;
    }
    return Rik;
}(Person));
var rik = new Rik('Rikkerdtje');
console.log(rik);
