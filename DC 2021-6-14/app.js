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