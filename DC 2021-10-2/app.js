// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// From: https://www.codewars.com/kata/545a4c5a61aa4c6916000755

//P: Will I ever be given less than a triplet? Empty array? String? Special chars?
//R: Should return the index of the median num
//E: See console logs.
//P: 
    function gimme(arr){
        //for loop
        for(i=0; i<arr.length; i++){
        //check to see if each num is bigger than the other and smaller than another
        if(arr[i] > arr[i].length + 1 && arr[i] < arr[i].length -1){
            //if it is, then return its index num
            return arr[i]
        }}}
    
    console.log(gimme([1,4,6]), 1)
    console.log(gimme([33,90,42]), 2)
    console.log(gimme([1,0,6]), 0)

    function gimme(arr){
        let set = new Set(arr)
        //for loop
        for(i=0; i<set.length; i++){
        //check to see if each num is bigger than the other and smaller than another
        if(set[i] > set[i].length + 1 && set[i] < set[i].length -1){
            //if it is, then return its index num
            return set[i]
        }}}

// Hint: spread array, sort it and grab the middle value. Throw that into indexOf the array itself

function gimme(arr){
    return [...arr].sort().indexOf(arr)   
}

//Tryna follow the hint. The above gives me -1 for everything, so at least it's giving me an answer, yanno?
//I need to spread the array. Then I need to sort the array. Then I need to somehow grab the middle val. Then I need to put that into the indexOf the arr. 
function gimme(arr){
    let newArr = [...arr].sort()
    let median = newArr[i] - 2
    newArr.indexOf(median)
}
//yeah..that didn't work. Damnit.
function gimme(arr){
    let newArr = [...arr].sort()
    for(i = 0; i<newArr.length; i++){
        let median = newArr[i] - 2
        return newArr.indexOf(median)
    }
}
//Ok, with this attempt, I am getting -1 again. So at least it isn't defined, but I really am not any closer than I was before with the simpler answer. 

//__________________________________

//Teacher soln
function gimme(arr){
    return arr.indexOf([...arr].sort((a,b)=>a-b[1]))
}
//Let's think through this...
//So we are sorting in descending order with [1] (middle el I believe). The sort is attached to a spread arr. And all of this is arr.indexOf. So the stuff in arr.indexOf() is all just getting that middle element.
//Tbh I don't really understand this. 

//Then my teacher has, in addition, this:
var gimme = function (inputArray) {
    //if the first el is less than the second, and is greater than the third, OR the first el is greater than the second and less than the third, return the index of that first el.
    if((inputArray[0] < inputArray[1] && inputArray[0] > inputArray[2]) || (inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2])){
        return 0;
    }

    //if the second el is less than the first and greater than the third, OR the second el is greater than the first and less than the third, return the index of the second el.
    if((inputArray[1] < inputArray[0] && inputArray[1] > inputArray[2]) || (inputArray[1] > inputArray[0] && inputArray[1] <inputArray[2])){
        return 1;
    }

    //if the third el is less than the first and greater than the second, OR it is greater than the first and less than the second, return the index of the third el. 
    if((inputArray[2] < inputArray[0] && inputArray[2] > inputArray[1]) || (inputArray[2] > inputArray[0] && inputArray[2] < inputArray[1])){
        return 2;
    }
    //This second soln makes slightly more sense, but also is extremely long and cumbersome. I don't understand setting the whole thing equal to the val of 'gimme', of why gimme being a function with all this happening enables it to use the index nums without having a for loop for i. 
}

//Another soln from codewars:
//Makes the whole thing ascending order
const ascending = (a,b) => a - b
//assigning the val of gimme to a function that takes in arr
const gimme = arr => 
//getting the index of
//Calling .slice() with no args copies the entire array.
//So you sort this copied array in ascending order, and then pull out the middle var. 
arr.indexOf(arr.slice().sort(ascending)[1])
//I understand what's going on here, but I don't understand how this is going to pull out any indices besides [1].