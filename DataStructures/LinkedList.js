/*

The most basic data structure used is Array but static nature of arrays in older programming languages required the number of items to be
declared in advance and then during execution, the program used to lock the contiguous memory location of that size for the data.

But in many cases this does not make sense because you don't know in advance how many items are going to be present. For example, if the value is
dependent on user input, we don't actually have control on the number of items user is adding. This was more of a concern in older machines where we had
limited memory allocated. If our programs takes up too much space, we can't have anything else running at the same time.

This condition brought in the idea of linked lists where each node actually had two parts, first data and then a pointer to the next node. This allowed
the idea of dynamically storing the data as and when it comes. The general idea is you need a pointer to the first node of the linked list and
then you can traverse to all of its nodes by moving the pointer to the next one....

*/


class LinkedList {

    constructor() {
        this.head = null;
    }

    createNode(data) {
        return {
            data: data,
            next: null
        }
    }

    add(data) {
        let node = this.createNode(data);

        if (this.head === null) {
            this.head = node;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    insertAt(data, index) {
        let node = this.createNode(data);

        if (this.head === null) {
            console.log('This list is empty, adding the data at index 0.');
            this.head = node;
        }
        else if(index === 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let current = this.head;
            let currentIndex = 0;
            let prev = this.head;
            while (currentIndex < index && current.next !== null) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            if (currentIndex === index) {
                prev.next = node;
                node.next = current;
            }
            else {
                console.log('Reached the end of the list, adding the node at last');
                current.next = node;
            }
        }
    }

    remove(index) {
        if (this.head === null) {
            console.log('This list is empty');
        }
        else if (index === 0) {
            this.head = this.head.next;
        }
        else {
            let current = this.head;
            let currentIndex = 0;
            let prev = this.head;
            while (currentIndex < index && current.next !== null) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            if (currentIndex === index) {
                prev.next = current.next;
            }
            else {
                console.log('Index exceeds the list size');
            }
        }
    }

    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }

    *values() {
        let current = this.head;
        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }
}


/*
let list = new LinkedList();
for (item of list) {
    console.log(item);
}
*/
