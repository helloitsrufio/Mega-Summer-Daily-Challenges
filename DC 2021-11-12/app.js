// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// From: https://www.codewars.com/kata/56414fdc6488ee99db00002c

//P: No need to worry about capitalization. Any special chars? Every sentence will contain all vowels but one. No need for string validation.
//R: Should return a index num of vowel.
//E: See console logs.
//P:
function indexOfVowel(str){
// Take string and split into individual chars
let newStr = str.split(' ')[...str]
//Map thru and check if letter = one of vowels.
newStr.map(x => x.filter(y => y = 'a' || y = 'e' | y = 'o' || y = 'u') : return x[i]  )

// Set condition of if it is not and it is a vowel, return num
}
//I think I'm on the right track, but I can't think of how, now that I only have vowels, to check to see if any are missing and then to return index num without a for loop.

console.log(indexOfVowel("John Doe hs seven red pples under his bsket"), 0)
console.log(indexOfVowel("Bb Smith sent us six neatly arranged range bicycles"), 3)
console.log(indexOfVowel("John A Doe hs seven red pples nder his bsket"), 0)


