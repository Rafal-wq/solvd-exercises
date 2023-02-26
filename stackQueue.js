class Queue {
    constructor() {
        this.enqueueStack = [];
        this.dequeueStack = [];
    }
    enqueue(item) {
        this.enqueueStack.push( item );
    }
    dequeue() {
        if (this.dequeueStack.length === 0) {
            while (this.enqueueStack.length > 0) {
                const item = this.enqueueStack.pop();
                this.dequeueStack.push( item );
            }
        }
        return this.dequeueStack.pop();
    }
}

const queue = new Queue();

queue.enqueue("Item 1");
queue.enqueue("Item 2");
queue.enqueue("Item 3");

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());