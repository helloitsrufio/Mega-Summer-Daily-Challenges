//Stacks are FIFO - first in, last out. You put tasks into a stack and you do them top to bottom.

class Stack{
    constructor(){
        this.items = []
    }
    push(el){
        this.items.push(el)
    }
    pop(){
        this.items.pop
    }
    peek(){
        return this.items[this.items.length - 1]
    }
}

let pancakes = new Stack()
pancakes.push('Birthday Cake')
pancakes.push('Chocolate Chip')
console.log(pancakes.peek()) //shows choc chip on top of stack

//push and pop are in constant time
//shift and unshift are linear operations