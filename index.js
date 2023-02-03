// json

// syntax
// const objectName = {
//   member1Name: member1Value,
//   member2Name: member2Value,
//   member3Name: member3Value,
// };

// const user = {};
// console.log(typeof(user));

// add value into the object
const user = {
  // array of objects
  name: [
    {
      firstname: "Nitish",
      lastname: "Rajbongshi",
    },
    {
      firstname: "Manash",
      lastname: "Chaudhary",
    },
    {
      firstname: "Rahul",
      lastname: "Deka",
    },
  ],
  age: "22",
  bio: function () {
    console.log(
      "Hello, I'm ",
      user.name[0].firstname,
      " and I'm ",
      user.name[1].firstname,
      " and we are both ",
      user.age,
      " years old"
    );
  },
  greeting: function (input) {
    console.log("Hello, welcome to ", input);
  },
};

console.log(user.name[0].firstname);
console.log(user.name[0].lastname);
console.log(user.name[1]);
user.bio();
user.greeting("JSON");

// function to access the property of the object
// it is only possible using bracket method not using the dot method
function getProperty(propName) {
    console.log(user[propName]);
}

getProperty('age');

// setting the properties of the object
// we can explicitly create properties of an onject
// we can create properties by using both dot or bracket method
user.department = "CSE",

// create a method of the object
user.farewell = function() {
    console.log("Good bye");
}

console.log(user.department);