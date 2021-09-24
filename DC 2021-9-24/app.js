
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// From: https://www.codewars.com/kata/5878520d52628a092f0002d0

//P: Will it always be a string? Any special characters? Will I ever be given an empty string? Have to deal with spaces. 

//R: Will return a reversed string whose letters are of the opposite case as the original string. 

//E: See console logs.

//P: Make a function that takes in a string.
function stringTransformer(str){
    let newStr = ''
// Split string based on a space
    str = str.split(' ').reverse().join(' ')
    
// Reverse string direction
// Change case
  for(i=0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      newStr = newStr + str[i].toUpperCase()
    }else {
      newStr = newStr + str[i].toLowerCase()
    }
    // Join string
    // Return string 
  }
  return newStr
  }


console.log(stringTransformer('fiSHstiCKS'), 'FIshSTIcks')
console.log(stringTransformer('coDIng is HARd'), 'harD IS COdiNG' )
console.log(stringTransformer('FINAL examplE'), 'EXAMPLe final')

//Got this with the help of fellow coders on stream. It was a really cool experience because it was kind of pair programming and teamwork, you know? And I feel like I figured out most of it by myself, which I am proud of. It was 6kyu too! That's so much harder than I feel like I can handle regularly, but I got it!