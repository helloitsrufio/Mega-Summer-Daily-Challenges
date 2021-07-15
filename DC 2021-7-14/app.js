// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.



// From: https://www.codewars.com/kata/5878520d52628a092f0002d0/

//P: Will not take in any special char. Will always be given a string. What is a leading/trailing space?
//R: should yield the caps opposite of whatever the letters are originally. Should switch the order of the words in reverse. 
//E: ex. if given 'big fIsh' -> 'BIG FiSH'
//   ex. if given 'RuthIe is THE bOmb' -> "rUTHiE IS the BoMB"
//   ex. if given 'I wish I were better at coding' -> 'i WISH i WERE BETTER AT CODING'
//P: Takes in a function with one parameter

//first attempt
function stringTransformer(str){
//   Separate chars from one another
//   Change case of char to opposite
let newStr = str.replace(/([A-Z])/g, (u) => u.toLowerCase()).split().reverse().join()
return newStr.replace(/([a-z])/g, (x) => x.toUpperCase())
//   Reverse order of words
//   Return result
}

//second attempt
function stringTransformer(str){
    return /([A-Z])/g ? (u) => u.toLowerCase() : (u) => u.toUpperCase()
}

//Didn't split with a delimiter; first mistake. Needed to split based on ' '.
//Looks like the first thing I needed to do was to reverse the string THEN try to change the caps.
//Have to split twice, once with ' ' and after the whole split-reverse-join thing, split again based on ''. This second split is so you can get all the letters separate so as to reverse caps. 
//Obviously I didn't get this, but I did try two methods. The second was a ternary and it looks like I largely got the structure of that right, at least the results bit. I needed to have .toUpperCase() in the conditions or something like that. 


//Teacher's soln:
function transform(str){
    str.split(' ').reverse().join(' ')
    return str.split('').map(l=> l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
}
console.log(transform('Dogs aRE kInD of GRoss'))