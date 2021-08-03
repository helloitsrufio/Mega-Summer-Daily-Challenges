// You will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

// dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]
// dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]
// dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]
// dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]
// dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]
// dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] 

// From: https://www.codewars.com/kata/57cc79ec484cf991c900018d

//P: Will never be empty. Will never be sparse. Will include numbers, strings, or a mix. You will be given an array. No special characters. Strings stay strings and numbers stay numbers. 'Five' is a string, not a number. Will nums always come first? Will it implictly be sorted into numbers vs strings?
//R: Returns a single array with nums in ascending order and strings in alphabetical order. 
//E: Ex. 1: [3, 'four', 'ninety', 2, 9] => [2,3,9,'four','ninety']
//   Ex. 2: ['I', 'am', 'a', 'fish', 2] => [2,'a', 'am' 'fish', 'I']
//   Ex. 3: [3,4,2,88,3] => [2,3,3,4,88]
//P: make a function
//   sort numbers (in ascending order)
//   sort strings (in alphabetical order)

//First (unsuccessful) try:

function dbSort(arr){
    let newArr = arr.sort()
    return newArr.sort((a,b)=> a.length-b.length)
}

//Second (also unsuccessful) try:
function dbSort(arr){
    let newArr = arr.sort()
    return newArr.sort((a, b) => a.localeCompare(b))
}

//Soln:
function dbSort(a){
    let num = a.filter(x => typeof x == 'number').sort((a,b) => a - b)
    let string = a.filter(x => typeof x == 'string').sort()
    return num.concat(string)
  }
  //So, analyzing this. They used .filter(), which I did not think of using. Additionally, they used it in a way I did not anticipate. They said that given x, if the type of x is a string (or a number), to sort it. The nums they sorted in ascending order, and the strings they just sorted. Then they used .concat(), which I am unfamiliar with, and combined num (at the beginning) with string (the parameter.) While I sort of got the sort bit, I was pretty far off tbh.

  //.concat() merges 2+ arrays. It returns an entirely new arr. You have the first array, tack .concat() on, and then put the second in the parameters.

  //.filter() creates a new array with all the elements that pass the test implemented by the given function. So the test in this place was whether it was a number, and if it was, to sort it in ascending order. Same with string, but with a string instead of a number.

  //Learning a lot here.