var myNumber = 20;
console.log(myNumber);
var myPerson = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
function personFunction(person) {
    return "".concat(person.name, " ").concat(person.age);
}
console.log(personFunction(myPerson));
// Exercise 3
