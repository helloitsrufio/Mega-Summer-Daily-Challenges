// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

// Hint: Remember how we grabbed individual letters from the string in yesterday's problem when not using the methods. Loop through a string and grab the letters from all to add to a new string. 

// From: https://www.codewars.com/kata/5704aea738428f4d30000914/javascript

// -----------------------------------------------------


//first attempt 

//P: Specials characters? Will it for sure have strings? Will any strings be anything other than a number in string? Like 'four'?
//R: Should return just the sum of the array.
//E: [2, "3", "30"] => 35
//   [11, 12, 1] => 24
//   ['2', '3', '4'] => 9
//P: start with function that takes in an array.
    function sumOfArray(arr){
//   make a loop that makes each element an integer in an array.
        for(i=0; i<arr.length; i++){
            //   sum all integers
            let arrOfNums = Number(arr[i])
            //   return sum
            return arrOfNums+=
        }

    }

    //second attempt

    function sumOfArray(arr){
       let newArr = arr.split('').map(i => parseInt(i))
       return newArr+=
    }

    // var b = a.split(',').map(function(item) {
    //     return parseInt(item, 10);
    // });

// third attempt

  // for(let i = str.length - 1; i>=0;i--){
  //   newStr += str[i]
  // }

  function sumOfArray(arr){
    //   make a loop that makes each element an integer in an array.
            for(let i=0; i<arr.length; i++){
                //   sum all integers
                let arrOfNums = Number(arr[i])
                //   return sum
                arrOfNums+= arr[i]
            }
    
        }

        //a little frustrating that I can't get this simple challenge right tbh even after trying 3 different variations.