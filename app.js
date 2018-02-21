"use strict";
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    return Person;
}());
var person = new Person('Rik Lamers', 'Rikkerdt');
console.log(person);
