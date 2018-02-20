"use strict";
// string
var myName = 'Rik';
// myName = 30;
// number
var myAge = 21;
// myAge = 'Rik';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ['Cooking', 'Coding'];
hobbies = [100];
// tuples
var address = ['Superstreet', 99];
// address = [99, "Superstreet"];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any EXECPTION!
var car = 'BWM';
console.log(car);
car = { Brand: 'BMW', sersies: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void WANNEER JE NIKS RETURNED!
function sayHello() {
    console.log('Hello');
    // return 'hello';
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
// function types
var myMultiply;
// myMultiply = sayHello();
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 5));
// objects
var userData = {
    name: 'Rik',
    age: 21,
};
// userData = {
//     a: 'hello', --> name: 'Hello'
//     b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 21;
myRealRealAge = '21';
// myRealRealAge = true;
// check types
var finalValue = 'A string';
if (typeof finalValue === 'string') {
    console.log(finalValue);
}
// never
function neverReturns() {
    throw new Error('An error');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
