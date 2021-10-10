// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

// Hint: Find the average off all the letters (don't get hung up on individual words add them all together) then map while repeating the characters the average amounts

// From: https://www.codewars.com/kata/5a430359e1ce0e35540000b1/

//P: Will we be given anything that isn't a string? Yes; in the case of that happening, use Math.round(). Minimum length > 1
//R: Will return an array of strings whose length are all uniform and are the average of the initial string.
//E: See console logs
//P: Make a function that takes in an arr

//------------first attempt---------------
     function averageLength(arr){
//   Make a for loop that, given each element, averages 
        let newArr = []
        for(i=0; arr.length > 1; i++){
            if(Math.round(arr[i].length) == Math.round(arr[i].length - 1)){
                newArr.push(arr[i])
            }
        }
//   Change length of each element to avg & return
        return newArr
     }

//getting err message of 'Cannot read property 'length' of undefined.'

//------------second attempt---------------

     function averageLength(arr){
        //   Make a for loop that, given each element, averages 
                let newArr = []
                for(i=0; i > arr.length; i++){
                    newArr += arr[i]
                }
                return newArr / arr.length
        //   Change length of each element to avg & return
    }

//returning nums instead of els in arr

//------------third attempt---------------

    function averageLength(arr){
        let newArr = []
        arr.map(el => el )
    }
    //not sure how to go about this with map(), but it seems like a good thing to use?


console.log(averageLength(['u', 'y']), ['u', 'y'])
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee'])

//------------teacher soln---------------
function averageLength(arr){
    //teacher's notes: rounded -> avg length of each str in arr -> join length/arr.length
    //my notes: Making a var and setting it equal to a num (that's what math.round is for). This num is comprised of all the elements in the arr joined together, their length gauged, and then divided by the length of the original arr. Doesn't make a ton of sense, but...
    //So you average by getting the total amount of chars and then dividing them by the num of elements. 
    let avgLength = Math.round( arr.join('').length / arr.length)
    //teacher's notes: map -> letter repeated ^
    //my notes:returning arr.map. Within the map, given string, you get the first el of string, and use the .repeat() method on it. It repeats the first el an avgLength amount of times. 
    return arr.map( str => str[0].repeat(avgLength))
    //I've never seen the .repeat() method, so here's an explanation. The repeat() method constructs and returns a new str that contains the specified num of copies of the str on which it was called, concatenated together. So if it was called on 'a' and told to repeat 5 times, it would return aaaaa. The num of times it repeats is specified in its parentheses. 
}