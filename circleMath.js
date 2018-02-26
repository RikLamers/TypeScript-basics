"use strict";
var myMath;
(function (myMath) {
    var PI = 3.14;
    function calculateCirmumference(diameter) {
        return diameter * PI;
    }
    myMath.calculateCirmumference = calculateCirmumference;
})(myMath || (myMath = {}));
