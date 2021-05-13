// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.
//Will it ever not be a string? What should I do with special characters? 
//Return an array of words that are sorted alphabetically by the final char in each word.

//make a function that takes in an arr
function backwardsArray(arr){
    //split arr into words
    //sort arr into alphabetical order based on the final letter of each word
    return arr.split(' ').sort((a,b)=>a.charCodeAt(a-1)-b.charCodeAt(b-1))
    //join the arr and return
}
//not working. It's returning the new string, but it's sorting weirdly and I don't really understand why. It certainly is not alphabetically or reverse alphabetically. 

console.log(backwardsArray('I love you'), '..love I you')
console.log(backwardsArray('This Dot'), '..This Dot')
console.log(backwardsArray('United States of America'), '..America United of States')