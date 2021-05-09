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