// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

// Hint: Find the average off all the letters (don't get hung up on individual words add them all together) then map while repeating the characters the average amounts

//P: Given an array of strings of the same letter type. Does that mean ['a', 'a'] etc? Will return a new array. The new array will be different in the way that the length of each element in the array will be the avg length of the elements in the previous one. So it seems that each element in the array needs to be the avg of the ones that preceeded it. 
//R: Returns an array with elements that are all the same length as the others. 
//E: So if I'm given: ['a', 'b', 'bb'] => ['a', 'b', 'b']
//   If I'm given ['r','yyy','eeeee'] => ['rrr', 'yyy', 'eee']
//   If I'm given ['e','aa', 'ee'] => ['ee','aa', 'ee']
//P: We'll want a function that evaluates the length of each element. Then we need to see if there is a way that we can average each element.
//   Will probably be in a loop or map to evaluate each element. 
//   Then we'll want to push or pop the extra elements.

//First attempt: (returned undefined)

function letterTypes(arr){
    for(i=0;i>=arr.length; i++){
        if(i == arr.length){
            arr.push(i)
        }else{
            arr.pop(i)
        }
    }
}

//class soln:

function letterTypes(arr){
    const avg = Math.round(arr.join('').length / arr.length)
    return arr.map(e => e[0].repeat(avg))
}
console.log(letterTypes(['aa', 'bbb', 'cccc']))
//Needed to use reduce().


//What would I ask an interviewer if this question was posed exactly as written (since it's confusing)?

//If need to return new Array, use .map()