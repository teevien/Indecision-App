class Person {
    // function defaults
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// const me = new Person('Teresa Vien');
// console.log(me.getGreeting());

// const other = new Person ();
// console.log(other.getGreeting());


class Student extends Person {
    // uses Person class
    constructor (name, age, major) {
        super(name, age); // super refers to the parent class which is Person
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    //overrides initial getGreeting method
    getGreeting() {
        let greeting = super.getGreeting(); // calls the parent class which exists in Person
        if (this.hasMajor()) {
            greeting += ` Their major is ${this.major}`;
        }
        return greeting;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation()) {
            greeting += `They lived in ${this.homeLocation}`;
        }
        return greeting;
    }
}


const me = new Traveller ('Teresa Vien', 26, 'Toronto');
console.log(me.getGreeting());
// console.log(me.hasLocation());
// console.log(me.hasMajor());



const other = new Student();
console.log(other.getGreeting());
// console.log(other.hasMajor());