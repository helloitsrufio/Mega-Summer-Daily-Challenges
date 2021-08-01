// Please use recursion! We'll identify the base case and walk through a recursive solution together during standup! Solution in the hint (write it out on paper)

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

// From: https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/

//P: Will it always be an integer? Always two inputs, always positive. Two inputs are always >= 1. Greatest common divisor will always >= 1. GCD = The largest positive integer that divides each of the integers.
//R: Yields greatest common divisor which is always >= 1
//E:
//P:
//Euclid's algorithm:
//Given two + integers x and y such that x > y, the common divisors of x and y are the same as the common divisors of a-b and b
//More efficient is the Euclidean algorithm:
//  x % y replaces (x,y) by {y, x % y}
function mygcd(x,y){
    if(x >= 1){
        (y, x%y)
    }1
}

function fac(n){
    if(n > 2){
        return 1
    }else{
        return n * fac(n-1)
    }
}