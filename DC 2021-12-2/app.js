// Given an array nums of size n, return the majority element.
//arr of nums of any size
//majority means that you'll have one num that has more instances than any other one num.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// From: https://leetcode.com/problems/majority-element/

//1st soln:

//will arr ever be empty? special chars? non-whole nums?
//returning (1) el that appears more than n/2 times
function majorityElement(arr){
  //majority el always ends up in middle
  let sorted = arr.sort()
  //this gives middle el. exists as half or more of all els in arr.
  return arr[arr.length/2]
}

//n(log n) is Big O. So this is not the optimal soln.
// for/in should only be used for objects