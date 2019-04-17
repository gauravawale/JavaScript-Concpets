/*
Now, we have a basic idea of how linked lists works. The next stage of linked list is doubly linked list, it is almost exactly same as the singly linked
list. But along with the next pointer to the node we have we also have the previous pointer pointing to the previous node in the list.
Also, we have to maintain two pointers here, head and tail.

With this structure we don't have to traverse the whole list to add list at the last of the list and we don't have to maintain a prev variable while inserting or
deleting the node from middle of the list. All other methods remains same and singly linked list.
 */


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    creatNode(data) {
        return {
            data: data,
            prev: null,
            next: null
        }
    }

    add(data) {
        let node = this.creatNode(data);
        if (this.head === null) {
            this.head = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
        }
        this.tail = node;
    }

    insertAt(data, index) {
        let node = this.creatNode(data);

        if (this.head === null) {
            console.log('This list is empty, adding the data at index 0.');
            this.head = node;
            this.tail = node;
        }
        else if (index === 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let current = this.head;
            let currentIndex = 0;
            while (currentIndex < index && current.next !== null) {
                current = current.next;
                currentIndex++;
            }

            if (currentIndex === index) {
                node.prev = current.prev;
                node.next = current;
            }
            else {
                console.log('Reached the end of the list, adding the node at last');
                current.next = node;
                node.prev = current;
                this.tail = node;
            }
        }
    }

    remove(index) {
        if (this.head === null) {
            console.log('This list is empty');
        }
        else {
            if (this.head !== null) {
                if (index === 0) {
                    this.head = this.head.next;
                }
                else {
                    let current = this.head;
                    let currentIndex = 0;
                    while (currentIndex < index && current.next !== null) {
                        current = current.next;
                        currentIndex++;
                    }
                    if (currentIndex === index) {
                        current.prev.next = current.next;
                        if (current === this.tail) {
                            this.tail = current.prev;
                        }
                        else {
                            current.next.prev = current.prev;
                        }
                    }
                    else {
                        console.log('Index exceeds the list size');
                    }
                }
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

}

var dl = new DoublyLinkedList();