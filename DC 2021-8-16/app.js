//What is the recursive soln to the fibonacci sequence?
// f(n) = f(n-1) + f(n-2) <= fib sequence
//soln

//first attempt, which was nothing because I didn't remember. So I thought through it instead.
function fib(n){
    if(n<2){return n}
    //Ahh I forgot. THIS is why it's recursive. Recursive = the function is called within its own function. We do that with fib(n-1) + fib(n-2)
    return fib(n-1) +fib(n-2)
}

//second attempt
    function fib(n){
        if(n<2){
            return n
        }
        //so basically the only thing i did wrong was stick fib(n) in there. pretty damn good
        return fib(n) = fib(n-1) + fib(n-2)
    }

    //Third attempt
    //f(n) = f(n-1) + f(n-2)

    function fib(n){
        if(n < 2){ return n}
        return fib(n - 1) + fib(n - 2)
    }

    //I did it perfectly! Third time's a charm, am I right? 