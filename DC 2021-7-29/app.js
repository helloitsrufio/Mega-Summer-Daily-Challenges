// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// https://www.codewars.com/kata/539ee3b6757843632d00026b

//P:Always takes strings, or can it take in anything else? Can it take in special 
//characters? - No 



//R:An array of the indexes of the capital letters.



//E: Ex.1: Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] )
//   Ex.2: console.log(capitals('hunDRedDEvs'), [3,4,7,8])
//   Ex.3: console.log(capitals('bEST groUp EvEr'), [1,2,3,8,11,13])

//P:
// 1. Iterate through string using a for loop of length of the array
// 2. For each character, if char is uppercase, append index to an result array
// 3. Return array upon completion of the for loop
//Personal attempt
function capitals(word){
   let newWord = word.filter(i => i == i.toUpperCase() ? [word.indexOf(i)] : '')
   return newWord
}


function capitals(word){
    let newWord = word.map(i => i)
}
//Class attempt
var capitals = function (word) {
    let char = word.split(' ')
    let arr = []
    for(let i = 0; i < word.length; i++){
      (word[i] === word[i].toUpperCase()) ? arr.push(i) : ''
    }
    return arr
  }

  //another classmate's soln:
  function capitals (str) {
    return str.split('').reduce ( (acc, ch, i) =>  (ch === ch.toUpperCase()) ? acc.concat(i) : acc, [] )
  }
  //So this is house this works. You split it into an array (each char), and then use reduce to reduce it to a single thing. In this case, that single thing is one array (but it has multiple elements inside!) You take in the accumulator (sum), character (el), and index. If the character is uppercase, then add the index to the accumulator (the array). Else, just return the accumulator with whatever is in it. And then the [] is the initial val, which isn't anything BUT it IS an array! So it makes reduce an array as opposed to like one #!