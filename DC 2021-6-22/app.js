// No recursion  or memoization please, just give me a raw for loop for today!

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//From: https://leetcode.com/problems/fibonacci-number/

//My attempt:
function fib(num){
    For(n >  2; n < num.length; n++){
     let sum = num[n-1] + num[n-2]
}
    return num
}
//Doesn't work. In retrospect that's partially because I didn't start with an array = [0,1], and then I didn't put the results into arr[num]