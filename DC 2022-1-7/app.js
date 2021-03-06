// You will be given an array of arrays and your task will be to return the num of unique arrays that can be formed by picking exactly one element from each subarray.

// For example, solve([[1,2], [4], [5,6]]) = 4 because it results in only 4 possibilities. They are [1,4,5], [1,4,6], [2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([1,2], [4,4], [5,6,6]) = 4, since the extra outcomes are just duplicates.

//Just arrays? Edge cases? special characters? Empty arr? No duplicates. Will we always be given more than one arr?
//Return the number of unique arrays where each element is used once in a specific order. Will be 1 number
console.log(uniqueArrays([2,4,1], [8,2,1]), 7) //[2,8], [2], [2,1], [4,2], [4,1], [1,8], [1]
console.log(uniqueArrays([7,4], [9,1]), 4) 
console.log(uniqueArrays([1,1]), 1)

//make a function that takes in a var arr
function uniqueArrays(arr){
//make a map
let map = {}
//make a count
let count = 0
//split arr
for(i=0; i <= arr.length; i++){
    arr.filter(n=>n[i] === n[i-1]? n : count+1)
}

return count
//for loop to get i

//map thru to compare i and i-1

//if they are the same, skip, if not, count +1 

//return count

}


function uniqueArrays(arr){
    return arr.map(s=>new Set(s).size).reduce((a,c)=>a*c, 1)
}

// You have an array full of arrays. Map through the parent array and make sure each sub array is a set aka no duplicate numbers. Once each sub array contains no duplicates you can just reduce multiplying the length of each sub array together to get the total combinations 


//don't want duplicates. Special characters? Empty arrays?
//going to return a num which is the num of unique pairs
console.log(uniqueArrays([[1,2], [4], [5,6]]),4)
console.log(uniqueArrays([[1,2], [4,4], [5,6,6]]),4)

//make a function that takes in an array
function uniqueArrays(arr){
    //use new set to get rid of duplicates
    arr.map(s=> new Set(s).size).reduce((acc,c)=>acc*c,1)
//.size to get length of el in set

//.reduce where you multiply acc by current value, start at 1
}