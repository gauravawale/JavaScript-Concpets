/*
Stack is a data structure just like an array but you have only one entry and exit points. You can imagine this as a stack of papers,
you can add new paper at the top of the stack and if you want to remove the paper, it should be removed from the top only. This is called as
Last In First Out (LIFO) principle
 */


class Stack {
    constructor() {
        this.top = -1;
        this.values = [];
    }

    push(data) {
        this.values[++this.top] = data;
    }

    pop() {
        if (this.top === -1) {
            console.log('Stack is empty');
        }
        else {
            console.log(this.values[this.top]);
            return this.values[this.top--];
        }
    }
    display() {
        let top = this.top;
        if (top === -1) {
            console.log('Stack is empty');
        }
        else {
            while(top >=0) {
                console.log(this.values[top--]);
            }
        }
    }
}

let s = new Stack();