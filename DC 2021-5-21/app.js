// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//the last how many even nums? I'm going with 2. WOn't be empty at at least contain n even numbers...? What does that mean?
//Oh nvm it means, given two params x and y, give y number of even num params in arr x.
//Return an arr with at least two even numbers that are on the end on the original arr.

//make a function that takes in two params
function lastEven(arr, num){
    //map thru arr and take last two numbers num
    arr.filter(e=>e % 2 == 0)
    //got the even numbers, but I have no idea how to return num of elements num...
    return arr
}
console.log(lastEven([1, 2, 3, 4, 5, 6, 7, 8, 9], 3),[4, 6, 8])
console.log(lastEven([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2),[-8, 26])
console.log(lastEven([6, -25, 3, 7, 5, 5, 7, -3, 23], 1),[6])