class Person {
    // default is public
    name: string;
    private type: string;
    protected age: number;

    constructor (
        name: string,
        public username: string
    ) {
        this.name = name;
    }
}

const person = new Person('Rik Lamers', 'Rikkerdt');

console.log(person);