// What is the memo-ize soln for the Fibonacci sequence?

const { clearCache } = require("ejs")

//fibonacci sequence means f(n) = f(n-1) + f(n-2)
//should get fibonacci result for a number n

//make a function that takes in a num n
function fib(n){
    //make a cache arr
    let cache = []
    //if cache[n], return cache[n]
    if(cache[n]){
        return cache[n]
    }else{
        return cache.push((n-1)+(n-2))
    }
    //if !cache[n], add n to cache
}
console.log(fib(3),3)
console.log(fib(4),6)
console.log(fib(5),7)

//partially remembering, but not fully. It's not fully working yet.

//make a memo obj
const memo = {}
//just means function fib(n)
let fib = function(n){
    //if the num is less than or equal to 1,
    if(n <= 1){
        //return it
        return n
        //if n is already in the memo.
    }else if(memo[n]){
        //return it
        return memo[n]
    }else{
        //make a result variable that calculates f(n). This will do recursion, tho, so once it subtracts, it automatically goes into the next num and starts this whole process over again. It stops when all the recursion has stopped, nums are added up, and result has a concrete value.
        let result = fib(n-1) + fib(n-2)
        //then you put n into memo (but this plays back into recursion, so each new num in the recursion will get added to the memo obj)
        memo[n] = result
        //finally, you return that variable. 
        return result
    }
}