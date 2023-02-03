const city = {
    name : "Bangalore",
    greeting: function() {
        console.log(`Welcome to ${this.city}`);
    }
}

console.log(city);
console.log(city.toString());
console.log(Object.getPrototypeOf(city));

false = true;
while (false) {
    console.log("Happy weekend");
}