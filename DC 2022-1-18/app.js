// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const { stringify } = require("nodemon/lib/utils")

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

//ignore capitalization. Will string ever be empty? Special chars are ok. Spaces are ok.
//Should return string, but in parentheses form. '(' if occurs once ')'

//make a function that takes in a str
function parenthesize(str){
    //break up string into individual chars
    let newStr = str.split('')
    for(i=0;i<str.length;i++){
        str[i] === str[i-1] ? str[i].replace(')') : str[i].replace('(')
    }
    return newStr.join('')
    //map through and check to see if the character has appeared in str

    //if it has occurred, replace with ')'

    //if not, replace with '('

    //join and return array. 
}
//just returning initial input.
console.log(parenthesize("din"),"(((")
console.log(parenthesize("recede"),"()()()")
console.log(parenthesize("(( @"),"))((")

//second attempt
function parenthesize(str){
    let newStr = str.split('').map(s=>s === s-1 ? str.replace(')') : str.replace('('))
    return newStr.join('')
}
//returning the input ut repeated the amount of times of elems had.


//third attempt
function parenthesize(str){
    //break up string into individual chars
    return str.split('').filter(s=> s === s-1 ? str.replace(')') : str.replace('(')).join('')
    console.log(str.split('').filter(s=> s === s-1 ? str.replace(')') : str.replace('(')))
    //map through and check to see if the character has appeared in str

    //if it has occurred, replace with ')'

    //if not, replace with '('

    //join and return array. 
}
//returned exact same input as the first soln. The filter isn't doing anything. The function is just taking the array apart and putting it back together.

//fourth attempt:
function parenthesize(str) {
    let newStr = str.split('')
    for(i=0;i<str.length;i++){
       newStr.filter(str[i] === str[i-1] ? str[i].replace(')') : str[i].replace('(')) 
    }
    console.log(newStr)
    return newStr.join('')
}
//giving me a TypeError, the type error being that 'd' is not a function...?

//solution:
function parenthesize(str){
    //ensure that everything is lower case, which I forgot
    return str.toLowerCase()
              //split if ofc
              .split('')
              //map thru, given 3 params: element, index, and array. say that in the array, if the index of the first element is the same as the index of the last, then ... I'm not exactly sure why this works tbh. Maybe this just a different way of doing e and e-1.
              .map((e, i, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
              //then you join
              .join('')
              //looks pretty smooth and organized. A lot easier to read.
  }


  //if it occurs once, return '('. If it occurs more than once, return ')'. Special chars included. Ignore capitalization.
  //return a string that is composed of ( and ) based on their frequency in the string.

  //make a function that takes in a str
  function parenthesize(str){
      //map thru string with 3 params: elem, index, and array, though we're only using the first and last. if the first elem is equal to the last, return ), else return (.
     return str.toLowerCase()
            .split('')
            .map((e,i,a)=>a.indexOf(e) === a.lastIndexOf(e) ? str.replace(')') : str.replace('('))
            .join('')
  }
  console.log(parenthesize('din'),"(((")
  console.log(parenthesize('recede'),"()()()")
  console.log(parenthesize('(( @'),"))((")
  //really thought I remembered it well but I didn't. It doesnt work. It just repeats the original input the amount of times that there are elems.

  //going over soln again:
  function parenthesize(str){
    return str.toLowerCase()
              .split('')
              //right so the ONLY difference here is that they didn't do str.replace(). In the conclusion part of the ternary they just put '(' and ')', 
              .map((e, i, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
              //but this doesn't quite make sense to me. Wouldn't, if e-1 and e were the same, it be ')' since there are two of that elem? Really tryna think through it and I just...don't get it.
              .join('')
  }
//Another!
function parenthesize(str){
    return str.toLowerCase()
              .split('')
              .map((e,i,a)=> a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
              .join('')
}
//Did it, though I STILL don't understand why it's '(' first instead of ')'.