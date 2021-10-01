// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:




// From: https://www.codewars.com/kata/523f5d21c841566fde000009

//P: Does it only take in numbers? Or are there any special characters? Will we be given empty arrays? 
//R: Should return nums that are not shared between two arrays.
//E: See console logs.


console.log(arrayDiff([1,2,2,2,3],[2]) == [1,3])

console.log(arrayDiff([], [4,5]), [])

console.log(arrayDiff([3,4], [3]), [4])

console.log(arrayDiff([1,8,2], []), [1,8,2])

//P: Make a function that takes in two params
    function arrayDiff(arr1, arr2){
//   Make a new, empty arr
        let newArr = []
//   Make a for loop to single out index nums 
    for(i=0; i<arr1.length || i<arr2.length; i++){
//   If index num of param 1 = el of param 2, pop that shit off.
        if(arr1[i] !== arr2[i]){
            newArr.push(arr1[i])
        }
//   Return new arr.
        return newArr
    }}

    //First attempt, it didn't give me an error, so that was very exciting. However, I'm getting either undefined or an empty arr. So it's not doing what I want it to, but at least it's working to an extent!

    //So in CodeWars, I've already attempted this problem, and this was my previous attempt:

    function arrayDiff(arr1, arr2){
        let difference = arr1.filter(x => !arr2.includes(x));
        console.log(difference)
      }
      
      arrayDiff([1,3,2,2],[2,9,4,1])

//It also doesn't work, but it's interesting to see the different approach I took. I didn't even think about filter this time. It's a lot more elegant, I think.

//Refactoring a bit:

function arrayDiff(arr1, arr2){
    let difference = arr1.filter(x => !arr2.includes(x));
    return difference
  }
  
  arrayDiff([1,3,2,2],[2,9,4,1])

//Ok...so it worked. I changed the console log of the var 'difference' to returning it, and it liked it! Now I just have to understand *why* that worked. 
//So, I have it so it takes in two arrays. Then I define a var, difference, and set it equal to arr1.filter(). Within that filter, I say that given x, if arr2 does not include x, return the difference.
//.filter() says, "Given x, apply these conditions to it and filter...out based on those?"
//Nope, it filters out elements into a new arr based on a condition. It does this my iterating through each el in the arr. So that's why I didn't need a for loop. 


//Teacher soln:

function arrayDiff(a,b){
    let newSet = new Set(b)
    return a.filter(n => !newSet.has(n)) 
  }
  console.log(arrayDiff([1,2,2,2,3],[2]),[1,3])
  console.log(arrayDiff([1,2],[1]),[2])

  //Ok, so teacher definitely did it differently. They made a new set by saying new Set of param b. Then they returned a with filter tacked on saying, "Given n, filter out if the new set has n." and returned.
  //I don't really know 'Set'. 'Set' objects are collections of vals. You can iterate through elements of a set in insertion order, and each val in the Set can only occur once. If that's the case, why do they need the second line? Maybe the first line just ensures that there are no doubles in 'b'. 