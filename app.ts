class Person {
    // default is public
    name: string;
    private type: string;
    protected age: number = 21;

    constructor (name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType('Old guy');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}

const person = new Person('Rik Lamers', 'Rikkerdt');

console.log(person);
person.printAge();
// person.setType('Cool guy');

// INHERITANCE

class Rik extends Person{
    name = 'Rik';

    constructor(username: string) {
        super('Rik', username);
        this.age = 19;
    }

}

const rik = new Rik('Rikkerdtje');
console.log(rik);



// GETTERS & SETTERS

class Plant {
    private _species: string = 'Default';

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }

}

let plant = new Plant();
console.log(plant.species);
plant.species = 'ABCD';
console.log(plant.species);


// STATIC PROPS & METHODS

class Helpers {
    static PI: number = 3.14;

    static calcCircumFerence(diameter: number): number {
        return this.PI * diameter;
    }

}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumFerence(8));



// ABSTRACT CLASSES
// THIS IS JUST HERE TO BE INHERIT
abstract class Project {
    public projectName: string = 'Default';
    public budget: number = 1000;

    abstract changeName(name: string): void;

    public calcBudget() {
        return this.budget * 2;
    }

}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);


// PRIVATE CONSTRUCTORS

class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public name: string) { }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    }
}

let werong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();

