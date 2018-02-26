"use strict";
var myMath;
(function (myMath) {
    function calculateRextangle(width, length) {
        return width * length;
    }
    myMath.calculateRextangle = calculateRextangle;
})(myMath || (myMath = {}));
