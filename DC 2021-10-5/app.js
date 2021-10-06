// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

//P: Will it only take in an array? Will there be anything besides numbers in that array? Like special chars? Will we ever be given an empty array?
//R: Should return an array where the odd nums are in ascending order while the even numbers keep their position.
//E: See console logs.
//P: Make a function that takes in an array.

// Hint: figure out the odd numbers and then map to replace in place

// From: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

//First attempt
function sortArray(arr){
    //Make a for loop
    for(i=0; i< arr.length; i++){
    //if an element is odd (!%2), then map it with a sort inside?
    if (arr[i] % 2){
        return arr[i]
    }else{
        return arr[i].map(arr[i].sort((a,b) => a - b))
    }
    //else return it. 
    }
}

//So it's telling me that I can't map or sort arr[i]. How else am I supposed to do shit with that specific el?

//Second attempt
    function sortArray(arr){
        //Make a for loop
        for(i=0; i< arr.length; i++){
        //if an element is odd (!%2), then map it with a sort inside?
        if (arr[i] % 2){
             arr.slice(arr[i])
        }else{
             arr.slice(arr.map(i).sort((a,b) => a - b))
        }
        //else return it. 
        }
        return arr
    }
    console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
    console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

//Tried to use slice since it's pulling those out of an arr into a new one...I think? I also don't think I'm using .map() right. 
