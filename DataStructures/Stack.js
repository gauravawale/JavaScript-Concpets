/*
Stack is a data structure just like an array but you have only one entry and exit points. You can imagine this as a stack of papers,
you can add new paper at the top of the stack and if you want to remove the paper, it should be removed from the top only. This is called as
Last In First Out (LIFO) principle
 */


let values = Symbol('values');
let toppointer = Symbol('toppointer');
class Stack {
    constructor() {
        this[toppointer] = -1;
        this[values] = {};
    }

    push(data) {
        this[values][++this[toppointer]] = data;
    }

    pop() {
        if (this[toppointer] === -1) {
            console.log('Stack is empty');
        }
        else {
            console.log(this[values][this[toppointer]]);
            let val = this[values][this[toppointer]];
            delete this[values][this[toppointer]--];
            return val;
        }
    }
    display() {
        let currenttop = this[toppointer];
        if (currenttop === -1) {
            console.log('Stack is empty');
        }
        else {
            while(currenttop >=0) {
                console.log(this[values][currenttop--]);
            }
        }
    }
}

let s = new Stack();
