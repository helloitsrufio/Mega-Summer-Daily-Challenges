// 🚨  Make sure you understand these before taking a look at the question:
// Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
// Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
// indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
// lastIndexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)


// DON'T WORRY ABOUT COMPLEXITY - we are using this one to practice our array methods!

// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)



// From: https://www.codewars.com/kata/59f11118a5e129e591000134


// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

// P: Will I take in an array? Are there any special characters? Will I ever be given an empty array? Will all elements be integers?
// R: Will I return the sum of all numbers that occur only once in the array? Will I return a number? 
// E: see below
// P: 
/*
  Make a function that takes in an array
  filter through array, keep elements that have same indexOf and lastIndexOf 
  return sum of filtered array
  
 */

  function repeats(arr) {
    let occursOnce = arr.filter(num => {
      return arr.indexOf(num) === arr.lastIndexOf(num)
    })
    console.log(occursOnce)
    return occursOnce.reduce((acc, cur) => acc + cur, 0)
  }
  
  
  
  console.log(repeats([4,5,7,5,4,8]),15)
  console.log(repeats([9, 10, 19, 13, 19, 13]),19)
  console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
  console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
  console.log(repeats([5, 10, 19, 13, 10, 13]),24)
  

// Hint: Filter the items where the index  equals the last index of and then reduce the sum