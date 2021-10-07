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

//---------------------------

//Teacher soln:
function sortArray(arr){
    //odd nums -< ascending (filter + sort)
    const oddNums = arr.filter(n => n % 2 !==0).sort((a,b) => a - b)
    // arr -> even stays in same spot and was odd from odd arr (map)
    return arr.map(n => n % 2 === 0 ? n : oddNums.shift())
}
//Ok, let's work through this.
//So my teacher has the function take in an arr.
//Then they set a value oddNums equal to a filtered array. This is filtered by given n, if it is not even, sort it in ascending order.
// Finally, map thru array again. Given n, if it is even, return n. If it is odd, grab the oddNums val (which has sorted odd numbers) and shift. Remember, shift removes the first element from the arr and returns it. So it maps through and keeps grabbing that first element. 
//TBH I definitely forgot that .shift() was a thing. And I forgot what it did.
//So what was done differently here was they used filter. They sorted and filtered the odd numbers and then had them in their own var. I definitely didn't do that. And I was tryna do !% to say not even, but I didn't set it to 0 and then say !== 0. I keep forgetting about that. And then I didn't actually do an arrow function in map where I was supposed to. This soln does make sense and I can definitely see where I went wrong. 