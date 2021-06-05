// The Fibbonacci numbers, commonly denoted F(n), form a sequence, called the Fibbonacci sequence, such that each num is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n-2), for n > 1.
// Given n, calculate F(n).

//no recursion, always be given a number. Formula needed is (n-1) + (n-2)
//should return sum of two preceding nums
//make a function that takes in a number. 
function fib(n){
    for(i=2; i<=n.length; i++){
        let sum = n[i-1] + n[i-2]
    }
    return sum
}
//loop so that it goes through each number before and returns sum.
console.log(fib(3),6)
console.log(fib(4),24)
console.log(fib(5),120)
//not working because I can't get it to recognize 'sum' for some reason. Really really weird. And if I try to return the line in the for loop it just returns as undefined.

//Solution:
function fib(n){
    let arr = [0,1]
    for(let i = 2; i <=n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}