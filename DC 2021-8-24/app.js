// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Hint:  HASH MAP PATTERN! ONE MORE TIME! Plus loop through hash map to find greater than 1 

// From: https://leetcode.com/problems/contains-duplicate/

//Haven't taken a look at this myself because I've been working on my 100hrs proj, but I figured I'd look at my teacher work through this at least.

//Teacher soln:
function containDup(arr){
    //create obj
    let map = {}
    //loop thru each num in arr
    for(let i=0; i <arr.length; i++){
        //first time it runs, creating a val with val of 1.
        //one-liner hashmap
        map[arr[i]] = map[arr[i]] + 1 || 1
        //current val we are on in arr. We'll set it to increment or val of 1. If the val exists, add 1, or else equal to 1.

        if(map[arr[i]] > 1){
            return true
        }
    }
    return false
}

//complexity is linear in time and linear in space-time