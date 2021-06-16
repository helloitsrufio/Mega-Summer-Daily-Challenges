// Create the function factorial that receives n and returns n!. You have to use recursion.

//factorial = whatever num is and all nums leading up to it multiplied.
//want answer of n!
console.log(factorial(4),24)
console.log(factorial(3),6)
console.log(factorial(5),120)

function factorial(n){
    //formula of factorial is n*n-1. Recursion => call factorial(n) within the code
    return factorial(n*n-1)
}
//too much recursion! It wouldn't work oof
//Ah we need a base case! that's why it was going fucking crazy


//WORK THROUGH SOLN
//function that takes in a number
function fac(n){
    //anything 2 and below will be 1, so if n < 2, return 1
    //else multiply the num by the function num - 1
    return n < 2 ? 1 : n * fac(n - 1)
}

//the defining char of this solution is the base case. a recursive soln NEEDS a base case or else the recursion won't stop.
//Also, they didn't do factorial(n*n-1), which doesn't work btw, but instead did n * factorial(n-1)