var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
define(["require", "exports", "./math/circle", "./math/rect"], function (require, exports, Circle, rect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Circle = __importStar(Circle);
    rect_1 = __importDefault(rect_1);
    console.log(Circle.PI);
    console.log(Circle.calcMoeilijkeNaam(10));
    console.log(rect_1.default(20, 50));
});
