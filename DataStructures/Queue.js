/**
 * Queue is the data structure just like an array where we are allowed to insert an element from one end while it can only be removed from the other.
 * You can image it as a normal queue of people standing in line for movie tickets, the person who got in first will get the ticket first and
 * move out of the line first. First In First Out (FIFO) principle.
 */

let rear = Symbol('rear');
let front = Symbol('front');
let values = Symbol('values');

class Queue {
    constructor() {
        this[rear] = -1;
        this[front] = -1;
        this[values] = {};
    }

    enqueue(item) {
        this[values][++this[rear]] = item;
    }

    dequeue() {
        if (this[front] == this[rear]) {
            console.log('Queue is empty');
        }
        else {
            let val = this[values][this[front] + 1];
            delete this[values][++this[front]];
            return val;
        }
    }

    list() {
        if (this[front] == this[rear]) {
            console.log('Queue is empty');
            return;
        }
        for (let i=this[front]; i <= this[rear]; i++) {
            console.log(this[values][i]);
        }
    }
}

let q = new Queue();