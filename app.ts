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
