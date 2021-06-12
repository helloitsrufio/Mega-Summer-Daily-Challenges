// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

//will i always be given strings and numbers? Or could i just be given one or the other? Any special characters? Spaces?
//Return sum of array vals as a single num
console.log(sumMix([9, 3, '7', '3']), 22)
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)

//make a function that takes in an array
function sumMix(arr){
    //map thru arr and make all elements numbers. Also add them via reduce.
     return arr.map(n=>Number(n)).reduce((a,c)=>a+c)

}

//given soln
function sumMix(arr){
    //so they simplified it by getting rid of .map() completely, which I understand, and tacking on the Number() to the current value. Smort. Also they gave a min val for reduce.
    return arr.reduce((a,c)=>a+Number(c),0)
}