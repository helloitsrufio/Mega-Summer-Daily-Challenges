// Create the function factorial that receives n and returns n!. You have to use recursion.

//don't have a clue, so let's work through it
function fac(n){
    //since it's recursion, does it always basically start at 1 or 2? I don
    return n < 2 ? 1 : n * fac(n-1)
}

fac(12){
    return 12 < 2 ? 1 : 12 * fac(12-1)
    // answer ends up being 12 * 11, so 132.
}


//The formula to find the factorial of a number is n! = n × (n-1) × (n-2) × (n-3) × ….× 3 × 2 × 1
//So 4! is 4 * 3 * 2 * 1. 
//   10! is 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

//soooooo 
// if we work through this, given that n = 10
// return 10 < 2 ? 1 : 10 * fac(n-1)
//  will return 10 * 9 = 90
//  90 < 2 ? 1 : 10 * fac (90-1) <= except I think it's actually supposed to be n = 9 the second time around. And then n = 8, n = 7, etc. They all multiply. That's what it does because recursion. But ultimately the answer will be 10!

//Second attempt:
function factorial(n){
    n < 2 ? 1 : n * factorial(n - 1)
}
//aaaaand I fucking rocked it. Like I got it and I understand it and I can explain it! Fuck yeah.