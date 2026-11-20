class Queue {
    constructor() {
        this.items = []
        
    }

    // Add customer to the end of the queue
    enQueue(customer) {
        this.items.push(customer)
    }

    // remove customer from the front of the queue
    dequeue() {
        if(this.isEmpty()){
            return null;
        } 

        return this.items.shift()
    }

    // check the front customer
    peek() {
        if(this.isEmpty()) {
            return null;

        }

        return this.items[0]
    }

    // check the last customer
    rear(){
        if(this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1]
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Check size of queue
    isFull(limit = 6) {
        return this.items.length >= limit;
    }

    // get all 
    getItems(){
        return [...this.items]
    }

    // Clear stack
    clear() {
        this.items = []
        
    }
}