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


//Teacher soln:
//Supposed to be one of each series of values, not just one of the val. 
//P: String of word entries coming in. Will it ever not be a string? Will there be special chars? Booleans? Extra empty spaces inside string?
//R: Returning str that has a singular val for each consecutive duplicate word.
//E: See test cases
function removeConsecutiveDuplicates(str){
//Split str => filter word that is not the next word=> join
    return str.split(' ').filter((w, i, a) => w != a[i+1]).join(' ')
}

//Also, it's the exact same thing with a[i-1]
//It's interesting that my teacher did this with .filter(), which is interesting because that was my first attempt at solving this. I just didn't know how to approach it, but I forgot that .filter() can take in an element, index, and array. That's what my teacher did and it worked out really beautifully. I've never actually seen those other params be used in action, so it's cool to see that be implemented.
//So it takes in a string, which you then split based on spaces and turn into an array. You take this array and filter it based on 3 params: a word, index num, and array. So given a word, keep it in the new arr if it is not the next element in the array (demonstrated by saying the i of a, but plus one.) And then, of course, you have to make it a str again, so you use .join(' '). I'm not sure why I can't ever seem to get .join() to work...I feel like I kind of did a similar thing.


console.log(removeConsecutiveDuplicates('alpha beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta')
console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta delta alpha beta beta gamma gamma gamma delta'), 'beta gamma beta gamma alpha')
console.log(removeConsecutiveDuplicates('How much wood can a woodchuck chuck if a woodchuck could chuck wood'), 'How much wood can a woodchuck chuck if a could')