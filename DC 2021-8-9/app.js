
// Factorial (the traditonal factorial q)

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

// Hint:  Look at our fib solution. What are the base cases for factorial?

// From: https://www.codewars.com/kata/5694cb0ec554589633000036

//Class soln:
// 3! means the product of all the positive integers that came BeforeUnloadEvent. so 3! would be 3 * 2 * 1. The product would be 6.
//At its most simple level, we're just doing n - 1 and multiplying that by the num that came before. So n * n - 1
//  so for 3! it would be 3 * (3 -1)
//Identify the base case/min val. 
function fac(n){
    if(n > 2){
        return 1
    }else{
        return n * fac(n-1)
    }
}
//Ternary version:
function fac(n){
    return n < 2 ? 1 : n * fac(n-1)
}

// Time complexity: O(n) (linear)