// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

// You may assume the input only contain English alphabet and spaces. Have to take spaces into account. Special chars?
//Return a string where order of words is reversed, and cases are reversed.

//make a method that takes in a str
function reverseStr(str){
    //split the string 
    let newStr = str.split('')
    //if it is lower case, to upper case, else to lowercase
    for(i=0;i<=str.length; i++){
        newStr[i] === newStr[i].lowercase() ? newStr[i].toUpperCase() : newStr[i].toLowerCase()
    };
    return newStr.join('').split(' ').reverse().join(' ')
    //arr.reverse()
    //join string and return
}


console.log(reverseStr('Example Input'), 'iNPUT eXAMPLE')
console.log(reverseStr('This Dot'), 'dOT tHIS')
console.log(reverseStr('I am a Very big FIsh'), 'fiSH BIG vERY A AM i')
