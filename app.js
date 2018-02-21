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
// GETTERS & SETTERS
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'ABCD';
console.log(plant.species);
// STATIC PROPS & METHODS
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumFerence = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumFerence(8));
// ABSTRACT CLASSES
// THIS IS JUST HERE TO BE INHERIT
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
// PRIVATE CONSTRUCTORS
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var werong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'Something else';
