// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

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