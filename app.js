"use strict";
function greet(person) {
    console.log('Hello', person.firstName);
}
function changeName(person) {
    person.firstName = 'Anne';
}
var person = {
    firstName: 'Rik',
    hobbies: ['Cooking', 'Coding'],
    greet: function (lastName) {
        console.log("Hi I am " + this.firstName + " " + lastName);
    },
};
// greet({firstname: 'Rik', age: 21});
changeName(person);
greet(person);
person.greet('Anything');
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi I am " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Rik';
myPerson.lastName = 'Anythingg';
greet(myPerson);
myPerson.greet('Anything');
var myDoubleFunction;
myDoubleFunction = function (number1, number2) {
    return (number1 + number2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 21,
    firstName: 'Rik',
    greet: function (lastName) {
        console.log('Hello');
    }
};
console.log(oldPerson);
