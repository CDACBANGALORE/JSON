class User {
    name;

    constructor(name = "BOB") {
        this.name = name;
    }

    greeting() {
        console.log("Hello, ", this.name);
    }
}

class Teacher extends User {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    greeting() {
        console.log(`Hello, I am ${this.name} and I teach ${this.teaches}`);
    }

    grade(paper) {
        console.log("You got only ", Math.floor(Math.random() * 5), " in your mid-term exam");
    }
}

const obj1 = new User("Nitish");
obj1.greeting();

const obj2 = new Teacher("Nitish", "Mathematics");
obj2.greeting();
obj2.grade("Math");