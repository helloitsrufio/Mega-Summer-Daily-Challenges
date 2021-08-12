// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071

// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

//edge case: what if it's at it's largest?

//one of the mistakes that ppl make in coding reviews is to take a lot of time handling edge cases. Many times the edge cases that you take time handling could be handled by your main code.

//how do we know what the next bigger # for 513 is? How do we teach a computer to go from 513 to 531? We're taking the 3 and shifting it left? 
//bubble sort: not an efficient sort. It's n^2. If you have something that's almost sorted (1 thing out of order) then it can sort almost linearly.

//5 1 3 2 -> 5 2 1 3 
//there's a soln to this that isn't efficient but is easy to implement. You can check to see if two #s are anagrams of one another. 
//if you're not sure how to do it efficiently, program the inefficient solution and let the interviewer know.
//we want to increase the num by shifting to the left but is minimal. 
//Start by taking lowest order dig and moving it left until it's on the other side of something that's smaller than it. 
//use helper functions in interviews. 


//Takes a num and returns the digits as an array
//1123 => [1,2,3]
function numToArray(n){
    return [...String(n)].map(d => Number(d));
}

//take an arr and return a num made from its digits
//[1,2,3] => 123
function arrayToNumber(arr)