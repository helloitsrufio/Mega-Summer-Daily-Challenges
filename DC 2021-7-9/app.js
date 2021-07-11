// Make sure you understand these before taking a look at the question:
// Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
// Number(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(arr){
let newArr = arr.split('')
Number(newArr)
}

function sumAll(arr){
    return arr.map(n=>Number(n)).reduce((a,c)=>a+c)
}
console.log(sumAll([9,3,'7','3']))

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 



// From: https://www.codewars.com/kata/57eaeb9578748ff92a000009

