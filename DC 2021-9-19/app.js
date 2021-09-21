// Sort (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

//P: The array/list size will be at least 3. Elements in array could be +, -, or 0. Will it always be an integer? Repetition is something that could happen. 

//R: Return the smallest element in the array. 

//E: 


//P: Make a function that takes in an array
    function nthSmallest(arr, e){
        let newArr = arr.sort()
        return newArr[e-1]
    }
//   Sort array
//   Return index 0

console.log(nthSmallest({3,1,2} ,2)) 
console.log(nthSmallest({15,20,7,10,4,3} ,3))
console.log(nthSmallest({15,20,7,10,4,3} ,3)) 
console.log(nthSmallest({177,225,243,-169,-12,-5,2,92} ,5)) 


// From: https://www.codewars.com/kata/5a512f6a80eba857280000fc/javascript
// Hint: sort the array and then grab the nth value. !remember how arrays are indexed :)

//online solution
function nthSmallest(arr, pos){
    return arr.sort((a,b)=>a-b)[pos-1]
  }
//they didn't assign a new var
//Looks like you need to be explicit about (a,b) => a - b. And then you can just put [e-1] on the end. 

//another solution
function nthSmallest(arr, pos){
    let sorted = arr.sort((a,b) => a-b);
    
    return sorted[pos-1];
  }

  //you have to put in (a,b)=> a - b because .sort() sorts implicitly by alphabet, not numbers. So I thought it automatically would sort it in numerical order with just .sort(), but it didn't. If you want it in ascending order, you should write .sort((a,b) => a-b). And if you want to do descending order, it should be .sort((a,b) => b - a).

  //Teacher basically did the same soln as the first online soln listed above.