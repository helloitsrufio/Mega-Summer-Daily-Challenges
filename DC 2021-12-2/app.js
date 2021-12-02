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
function majorityElement(arr){
  //map obj
  let elem = {},
      count = 0,
      majElem = arr[0]

  for(const num of arr){
    //set property of whatever num is and assign it a value
    //was the value already there? Set it equal to 1. If it was there, add one to it.
    elem[num] = elem[num] + 1 || 1
    //now we have the frequency by which each of the elems appear
  }

  for(const n in elem){
    //as we're moving thru each num in elem, we're going to check its count
    //if it's there and its value is greater than count
    if(elem[n] > count){
      //we'll set count to that val
      count = elem[n]
      //change majElem to be that property
      majElem = n
    }
  }
  return majElem
}
console.log(majorityElement([3,2,3]),3)
console.log(majorityElement([2,2,1,1,1,2,2]),2)