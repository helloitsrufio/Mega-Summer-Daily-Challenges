//Fibonacci memo-ize soln
const memo = {}
var fib = function(n) {
    if(n <= 1){
        return n
    }else if( memo[n]){
        return memo[n]
    }else{
        let result = fib(n-1) + fib(n-2)
        memo[n] = result
        return result
    }
}
//Turned from quadratic to linear with each nth number we look @
//Commit to memory