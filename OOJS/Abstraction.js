/*
Abstarction can be easily explained as "Hide the details, show the essentials"
 */

function Coffee(type) {
    this.coffeeType = type;

    var resultCoffee = {};

    var addMilk = function () {
        resultCoffee.milk = "2 Table Spoons";
    }

    var addSugar = function () {
        resultCoffee.sugar = "1 Tea Spoon";
    }

    this.brewCoffee = function() {
        addMilk();
        addSugar();
        console.log(`Please enjoy your ${this.coffeeType} with ${resultCoffee.milk} and ${resultCoffee.sugar}`);
    }
}

var coffee1 = new Coffee('mocha');
coffee1.sugar = 2;

coffee1.brewCoffee(); // Please enjoy your mocha with 2 Table Spoons and 1 Tea Spoon

// This same can be implemented using factory pattern and object IIFE as shown in the Encapsulation example