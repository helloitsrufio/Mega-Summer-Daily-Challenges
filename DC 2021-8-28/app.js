//Queue is a FIFO data structure- first in, first out 
//Where would we use a queue?
//Whitelist, food storage, call queue, sending stuff to your printer
//The sibling to this is a stack.

// constructor enables us to generate a queue
// enqueue => stuff in queue. This should be the first thing that dequeues
// dequeue => taking stuff out
class Queue{
    constructor(){
      this.queue = []
    }
    enqueue(el){
      this.queue.unshift(el)
    }
    dequeue(){
      return this.queue.pop()
    }
    size(){
      return this.queue.length
    }}

    //Actually using this
  let q1 = new Queue //invoking the constructor
  q1.enqueue('bob')
  q1.enqueue('john')
  console.log(q1.dequeue())//result is bob b/c first thing in, first thing out. Now it's no longer in the queue.
  console.log(q1.size())//"You are second in line."
  //Could use for a call waiting app