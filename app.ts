interface namedPerson {
    firstName: string,
    age?: number,
    [propName: string]: any,
    greet(lastName: string): void;
}

function greet(person: namedPerson) {
    console.log('Hello', person.firstName);
}

function changeName(person: namedPerson) {
    person.firstName = 'Anne'
}

const person: namedPerson = {
    firstName: 'Rik',
    hobbies: ['Cooking', 'Coding'],
    greet(lastName: string) {
        console.log(`Hi I am ${this.firstName} ${lastName}`)
    },
};

// greet({firstname: 'Rik', age: 21});
changeName(person);
greet(person);
person.greet('Anything');

class Person implements namedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log(`Hi I am ${this.firstName} ${lastName}`);
    };
}

const myPerson = new Person();
myPerson.firstName = 'Rik';
myPerson.lastName = 'Anythingg';
greet(myPerson);
myPerson.greet('Anything');

// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(number1: number, number2: number): number {
    return (number1 + number2) * 2;
}

console.log(myDoubleFunction(10, 20));

// Interface Inheritance

interface agedPerson extends namedPerson {
    age: number;
}

const oldPerson: agedPerson = {
    age: 21,
    firstName: 'Rik',
    greet(lastName: string): void {
        console.log('Hello');
    }
};

console.log(oldPerson);
