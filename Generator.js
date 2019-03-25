/*
Sometimes if the collection is complex then traversing on that or iterating on that can be little complex.
Since in iterators we are the one who is writing the code for iterating on the collection we might need it to be little easier.

Generators is the easier way to create iterator factories
 */



function* generator(i) {
    yield i;
    yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20


function* febonnaci(limit = Infinity) {
    let [prev, current] = [0, 1];
    while (current < limit) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}

//for (let i of febonnaci(30)) console.log(i);

let arr = [...febonnaci(30)];


// Above example can be used to itegrate with out iterator example

function Person() {
    this.obj = {}
}

Person.prototype.addProperty = function(key, value) {
    this.obj[key] = value;
}

Person.prototype[Symbol.iterator] = function*() {
    for (var key in this.obj) {
        yield this.obj[key]
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


for (a of person1) console.log(a);



// Need to identify a good example for showing the need to passing value to yield

function* generator(i) {
    var a = yield i;
    yield a + 10;
}

var gen = generator(10);

console.log(gen.next());
// expected output: 10

console.log(gen.next(100));
// expected output: 110