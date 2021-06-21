// Can you solve with a for loop like Friday? How about with recursion? 

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//Recursion means calling the function within itself.
// Should return an arr of nums composing the param num
//Examples:

//Attempt 1:

function fib(n){
    return fib(n-1) + fib(n-2)
}
//too much recursion err

//Attempt 2:

function fib(n){
    let arr = [0,1],
    for(i >= 2; i <= n.length; i++){
         arr[i] = arr[fib(n-1)] + arr[fib(n-2)]
    }
    return arr[n]
}
//missing var name. What var?

//Attempt 3:
function fib(n){
    let arr = [0,1],
    for(i >= 2; i <= n.length; i++){
         let newArr = arr[i] = arr[fib(n-1)] + arr[fib(n-2)]
    }
    return newArr[n]
}
//tried this with the new var name but it didn't work.

//Attempt 4:
function fib(n){
    if(n>2){
        for(i >= 2; i <= n.length; i++){
         let newArr = arr[i] = arr[fib(n-1)] + arr[fib(n-2)]
         }
    return newArr[n]
}}
//returned undefined

//Attempt 5:
function fib(n){
    if(n>2){
     return fib(n-1) + fib(n-2)
    }
}
//returned NaN
console.log(fib(9))

//Teacher soln
function fib(num){
    if(num<2){
        return num
    }
    return fib(num-1) + fib(num-2)
}

