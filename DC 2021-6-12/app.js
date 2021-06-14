//What is the memo-ize soln for the Fibonacci sequence?

//memoizing basically allows you to store result so no extra work is done on behalf on computer. Ideal way to solve fib sequence problem.
//Return n!, but memo-ize style!
console.log(fib(5),120)
console.log(fib(12),479001600)
console.log(fib(14),87178291200)

//make a function that takes in a number
function fib(n){
    //base case of n>2

    //set memoize var to be empty arr

    //
}
//couldn't remember tbh

//set memo to be an empty obj
const memo = {}
//the variable fib is equal to the function that takes in n WHERE
var fib = function(n) {
    //setting up base case. If n is less than or equal to 1, return n
    if(n <= 1){
        return n
    //if not, if n is already in the memo obj.
    }else if( memo[n]){
        //return the memo obj
        return memo[n]
    //if n is not in memo obj already,
    }else{
        //set var result = to fib(n-1) + fib(n-2)
        let result = fib(n-1) + fib(n-2)
        //let n of memo equal to that result
        memo[n] = result
        //return result
        return result
  }}
  //this isn't working in the browser and isn't super making sense to me either.

const memo = {}
var fib = function(n) {
    if(n <= 1){
        return n
    }else if( memo[n]){
        return memo[n]
    }else{
        //ok. This is where the magic happens. It goes down in that pyramid structure that Leon showed us. If n is not satisfied by the prev two conditions, then it is stuck into fib(n-1), which immediately begins another recursive loop with the num = n - 1, and so on and so forth. And then it will build back up using what it has in its cache.
        let result = fib(n-1) + fib(n-2)
        memo[n] = result
        return result
  }}