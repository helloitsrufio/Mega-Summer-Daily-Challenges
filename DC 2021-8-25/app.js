// Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.

// An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out. 

// Waiting Lines

// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.

// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

// As long as the tests pass, go for it!

// Hint:  Create a class that has four methods: constructor - creates array, enqueue - unshift, dequeue - pop, and size - length


// From: https://www.codewars.com/kata/55a9c0994cb7e284d500005e/javascript

//Does it take in numbers? Strings? Special chars? How many things is it supposed to yield?
//R: Supposed to yield a class that has 4 methods: constructor, enqueue, dequeue, size
//P: make a class
//   make a constructor within that class
//   parameters in constructor?
    class Queue{
        constructor()
        Queue.unshift()
        Queue.pop()
        Queue.size()
    }
    //So this is what I came up with but I *really* don't understand what this coding challenge wants me to do. So I opened up Codewars and this is what they have to start with:

    var Queue = function() {
        // implement your Queue constructor here
      };
      
      Queue.prototype.enqueue = function(item) {
        // add item to the queue
      };
      
      Queue.prototype.dequeue = function() {
        // remove item from the front of the queue and return its value
      };
      
      Queue.prototype.size = function() {
        // return number of items in queue so far
      };

      //It looks to me like they...solved it? That or I just am completely lost. Like *completely* lost. 

      //This is a soln:
      //I did the first line right at least
      class Queue {
        //So they added a {} onto the constructor (an obj?) and said this.q = [] (an arr). Not super sure what's happening here. They're making the queue an obj and arr?
        constructor(){ this.q = [] }
        //Enqueue is apparently a method or function or something? You can apply it via unshift?
        enqueue(item){ this.q.unshift(item) }
        //Dequeue is also a function? But you have to return it? Why do you have to return it? And you use .pop()
        dequeue(){ return this.q.pop() }
        //Size is also a function, but you return the length...?
        size(){ return this.q.length }
      }

      //Class soln
      class Queue{
        constructor(){
          this.queue = []
        }
        //needs a parameter because it's putting something into the queue
        enqueue(el){
          //putting that element on the front
          this.queue.unshift(el)
        }
        //no param needed because you're just poppping something off
        dequeue(){
          return this.queue.pop()
        }
        size(){
          return this.queue.length
        }
      }
      //For a queue data structure you always need to have these three methods: enqueue, dequeue, size.