// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta" 

//P: Does it only take in strings? Will we ever be given an empty string? 
//R: Return a string of words where none are repeated.
//E:See console logs.
//P: Make a function that takes in a string.
    function removeConsecutiveDuplicates(str){
    //Filter saying if one index !== another index, add to new string
        str.filter(n=>n[i] !== n[i-1])
    //Return new string
        return str
    }

    //Second attempt: Was getting an error with .join() because maybe it's not an array?
    function removeConsecutiveDuplicates(str){
        let newStr = []
        for(i=0; i<str.length; i++){
            if(str[i] !== str[i]-1){
                newStr.push(str[i]).join('')
            }
        }
    }

    //Third attempt. It wasn't recognizing when I did str.split by itself, so I made it a new var. But...it didn't seem to help much, honestly. This does return an answer: 1. So at least it's not an error, but it's not what I want. At line 31 it works relatively well, but not after that.
    function removeConsecutiveDuplicates(str){
        let newStr = []
        let newNewStr = str.split(' ')
         for(i=0; i<newNewStr.length; i++){
             if(newNewStr[i] !== newNewStr[i]-1){
                return String(newStr.push(newNewStr[i]))
             }}
    }

    //Fourth attempt. Came back as undefined...
    function removeConsecutiveDuplicates(str){
        let newStr = str.split(' ')
        //Filter saying if one index !== another index, add to new string
            newStr.filter(n=>n[i] !== n[i-1])
        //Return new string
            return newStr
        }


console.log(removeConsecutiveDuplicates('alpha alpha beta omega'), 'alpha beta omega')
console.log(removeConsecutiveDuplicates('beta gamma beta gamma alpha'), 'beta gamma alpha')
console.log(removeConsecutiveDuplicates('How much wood can a woodchuck chuck if a woodchuck could chuck wood'), 'How much wood can a woodchuck chuck if a could')