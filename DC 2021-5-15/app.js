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

//second attempt
function reverseStr(str){
    let newStr = str.split('')
    return newStr.map(s=>s===s.toLowerCase() ? s.toUpperCase() : s.toLowerCase()).join('').split(' ').reverse().join(' ')
}
//second time's the charm! I worked through this and was getting stuck. I tried to have the second split apply to newStr on another line and it did NOT like that even though the input should have been a str at that point...but it worked perfectly when I tacked it on to the previous line!
//It was interesting noting my thinking process. At first I went for a for loop, and then I remembered, "Oh yeah, map! Map can do that for me!" .map() has always been a hard function for me and I'm glad to see I'm apparently understanding it.
console.log(reverseStr('Example Input'), 'iNPUT eXAMPLE')
console.log(reverseStr('This Dot'), 'dOT tHIS')
console.log(reverseStr('I am a Very big FIsh'), 'fiSH BIG vERY A AM i')

//official answer
function strTransform(str){
    return str.split(' ')
              .reverse()
              .join(' ')
              .split('')
              .map(c => c == c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())
              .join('')
  }
  //Almost exactly the same as my soln. They did the word reversal before the caps reversal, but the map bit is exactly the same (which I am extremely proud of; haven't looked at this challenge in a WHILE. Look at me growing and understanding coding better!). They also stylistically changed it for it to be easier to read, which I understand.
  //Go me!