// string
let myName: string = 'Rik';
// myName = 30;

// number
let myAge: number = 21;
// myAge = 'Rik';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ['Cooking', 'Coding'];
hobbies = [100];

// tuples
let address: [string, number] = ['Superstreet', 99];
// address = [99, "Superstreet"];

// enums
enum Color {
    Gray,
    Green = 100,
    Blue
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any EXECPTION!
let car: any = 'BWM';
console.log(car);
car = {Brand: 'BMW', sersies: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

// void WANNEER JE NIKS RETURNED!
function sayHello(): void {
    console.log('Hello');
    // return 'hello';
}

// argument types
function multiply (value1: number, value2: number): number {
    return value1 * value2;
}

console.log(multiply(2, 3));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello();
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 5));

// objects
let userData: { name: string, age: number } = {
    name: 'Rik',
    age: 21,
};

// userData = {
//     a: 'hello', --> name: 'Hello'
//     b: 22
// };

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

//type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

//union types
let myRealRealAge: number | string = 21;
myRealRealAge = '21';
// myRealRealAge = true;

// check types
let finalValue = 'A string';
if (typeof finalValue === 'string') {
    console.log(finalValue);
}

// never
function neverReturns(): never {
    throw new Error('An error');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;





// spread operator
console.log('REST & SPREAD OPERATOR');

const numbers = [1, 10, 99, -5];

console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

function makeArrayFunction(arg1: number, arg2: number) {
    return [arg1, arg2];
}

// Wanneer je niet weet hoeveel arguments je als parameter mee geeft
function makeArrayFunction1(...args: number[]) {
    return [args];
}

console.log(makeArrayFunction1(1, 2));


//DESTRUCTURING

const myHobbies = ['Cooking', 'Coding'];

const [ hobby1, hobby2 ] = myHobbies;
console.log(hobby1, hobby2);

const userData1 ={
    userName: 'Rik',
    age: 21
};

const { userName, age } = userData1;
console.log(userName, age);

// TEMPLATE LITERALS

const NameUser = 'Rik';
// const greetz = 'Hello, my name is ' + NameUser;
const greetz = ` This is a heading!
I am ${NameUser}`;

console.log(greetz);
