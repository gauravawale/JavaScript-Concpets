/*
Iterators:
    The default collections in JS like Arrays are provided with the default methods (Algorithms) like find, filter, search, sort. If we want to access these methods on other collections like Object we generally use Array.prototype.slice.call, Object.keys etc. As a solution to this we can write our own function with the collection and tell the function how to iterate over the given collection.

    In this way once we make the iteration generic, we can focus on writing the algorithm. In other words this allows us to separate the iterations and algorithm (Business logic).

    ES6 provides a way to iterate over the collection using for ... of loop provided an iterator is defined on the collection using "Symbol.iterator" property.

 */

function Person() {
    this.obj = {}
}

Person.prototype.addProperty = function(key, value) {
    this.obj[key] = value;
}

Person.prototype.iterFactory = function() {
    var self = this;
    var objKeys = Object.keys(self.obj);
    var index = 0;
    return {
        next() {
            if(index == objKeys.length) {
                return {
                    done: true
                }
            }
            else {
                var value = self.obj[objKeys[index++]];
                return {
                    value: value
                }
            }
        }
    }
}

Person.prototype[Symbol.iterator] = function() {
    var self = this;
    var objKeys = Object.keys(self.obj);
    var index = 0;
    return {
        next() {
            if(index == objKeys.length) {
                return {
                    done: true
                }
            }
            else {
                let val = self.obj[objKeys[index++]];
                return {
                    value: val
                }
            }
        }
    }
}

var person1 = new Person();

person1.addProperty('name', 'Gaurav');
person1.addProperty('age', '28');
person1.addProperty('height', '180');
person1.addProperty('address', {
    'building': 'Blue Bell',
    'Area': 'Viman Nagar',
    'City': 'Pune'
});

var iterator = person1.iterFactory();

while (true) {
    var item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}


for (a of person1) console.log(a);
