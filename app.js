"use strict";
var myMath;
(function (myMath) {
    var PI = 3.14;
    var circle;
    (function (circle) {
        function calculateCirmumference(diameter) {
            return diameter * PI;
        }
        circle.calculateCirmumference = calculateCirmumference;
    })(circle = myMath.circle || (myMath.circle = {}));
})(myMath || (myMath = {}));
var myMath;
(function (myMath) {
    function calculateRextangle(width, length) {
        return width * length;
    }
    myMath.calculateRextangle = calculateRextangle;
})(myMath || (myMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectengleMath.ts" />
var CircleMath = myMath.circle;
console.log(myMath.calculateRextangle(10, 20));
console.log(CircleMath.calculateCirmumference(3));
var PI = 3.14;
function calcMoeilijkeNaam(diameter) {
    return diameter * PI;
}
function calculateRectangle(width, length) {
    return width * length;
}
