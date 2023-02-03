// creating JSON object by using the constructor

// why we use constructor

// when we have to create numbers of object and have to set values to it
// it becomes less flexible 

// creating constructor by using this keyword

function myObj(name, userName, userAge) {
    this.name = name;
    this.user = userName;
    this.age = userAge;
    this.introduce = function() {
        console.log(`Hello, I\'m ${this.user} and I\'m ${this.age} years old`);
    } 
}

// create an instance of the object
const obj1 = new myObj("Person", "Nitish Rajbongshi", "22");
console.log("Name of the object: ", obj1.name);
console.log("Name of the user: ", obj1.user);
console.log("Age of the user", obj1.age);
obj1.introduce();

// create another instance of the object
const obj2 = new myObj("Person", "Manash Chaudhary", "22");
console.log("Name of the object: ", obj2.name);
console.log("Name of the user: ", obj2.user);
console.log("Age of the user", obj2.age);
obj2.introduce();
