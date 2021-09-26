// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.'

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

// From: 
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

//P: Will there be any special characters? Any empty strings? 
//R: Returns an array of strings ordered in alphabetical order by last letter in string.
//E: See console logs.

//P: Have a function that takes in a string of words
    function last(x){
//   Map through and reverse each string
//   Order strings in alphabetical order
        for(i=0; i<x.length; i++){
           let newX = x[i].reverse().sort((a,b)=>a-b)
             newX.reverse()
        }
        return newX
//   Reverse strings back to original 
//   Return
    }

    function last(x){
        //   Map through and reverse each string
        x.map((el)=>{
            for(i=0; i<x.length; i++){
                el[i].reverse().sort((a,b)=>a-b)
        }})
        return x
    }
        //   Order strings in alphabetical order
                for(i=0; i<x.length; i++){
                   let newX = x[i].reverse().sort((a,b)=>a-b)
                   return newX.reverse()
                }
        
        //   Reverse strings back to original 
        //   Return
            }


console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to'])

//On first two attempts, running into issues with x[i] and el[i] respectively. 



function last(x){
    const words = x.split(' ')
    //   Map through and reverse each string
    //   Order strings in alphabetical order
            for(i=0; i<words.length; i++){
               let newX = words[i].reverse().sort((a,b)=>a-b)
                 newX.reverse().join(' ')
            }
            return newX
    //   Reverse strings back to original 
    //   Return
        }
        //this is what my classmate and I got done before the class started.
