/*
Encapsulation is a concept where we wrap the properties and methods to read/modify those properties of the object together.
This also includes that those properties should be protected from being accessed/modified directly by the outside world
 */

function Person(name) {
    this.getName = function() {
        return name;
    }
}

var p1 = new Person('Gaurav');
console.log(p1.name); // undefined
console.log(p1.getName()); // Gaurav

// The above example can also be written as
function CreatePerson (name) {
    return {
        getName: function() {
            return name
        }
    }
}

var p1 = CreatePerson('Gaurav');
console.log(p1.name); // undefined
console.log(p1.getName()); // Gaurav

// If you want to create a single object and not a factory then

var p1 = function(name) {
    return {
        getName: function() {
            return name
        }
    }
}('Gaurav');

console.log(p1.name); // undefined
console.log(p1.getName()); // Gaurav
