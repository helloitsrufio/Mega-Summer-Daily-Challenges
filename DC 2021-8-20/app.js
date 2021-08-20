// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Hint:  HASH MAP PATTERN! and possibly sorting for nlogn :)

// From: https://leetcode.com/problems/majority-element/

//Teacher soln
var majorityElement = function(nums){
nums = nums.sort()
return nums[Math.floor(nums.length/2)]
}
console.log((majorityElement([6,5,5])))
//Majority element is the one that will always appear more than half the nums in the array.

//if it's sort it's almost always nlogn, which is quasi-linear time complexity.
//^^not the optimal soln

//Hashmap soln
var majorityElement = function(nums){
    const elem = {},
          count = 0,
          majVal = nums[0]

    for(let i = 0; i < nums.length; i++){
        // look in elem object to see if it has the property of the current val. If so,
        if(!elem[nums[i]]){
            //since it's not there, create that element and give it the val of 1
            elem[nums[i]] = 1
        }else{
            //since the element/current val is there, then increment the val by 1. 
            elem[nums[i]]++
            //now we have a running total of the vals in the array and how many of those values exist.
        }
    }
    for(const prop in elem){
        //loop thru properties in elem obj
        if(elem[prop] > count){
            //let's access object based on property, so whatever val it is
//is x indeed greater than the current count (which starts as 0), change to the count of the prop
            count = elem[prop]
            //now the majVal is equal to that same count
            majVal = prop
    }
    return majVal;
}}