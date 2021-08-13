//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each num is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
//F(n) = F(n-1) + F(n-2), for n>1


//recursive means a function that calls itself
//Trying to get all the way down to a base case and all the way up again.
//Take a num, break it down to its base case. So if n = 5, break it down via the following function until the first case is true.

function fib(n){
    if(n<2){return n}
    //^^base case
    return fib(n-1) + fib(n-2)
    //odd b/c function is calling itself
    //for every new num we add, we are adding 2 layers.
}