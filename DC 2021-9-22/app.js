//Need to read the following articles before taking a crack at the problem: 

// Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
// lastIndexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 



// From: 
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

//P:capitalization is ignored. Will it always be a string? Special characters allowed. Is there a min size for string? White spaces counted as chars.
//R: Return NEW string composed of ( and ) based on frequency.
//E: See console.logs below

//first attempt:

function duplicateEncode(word){
    //Make all strings lowercase
      word.toLowerCase()
    //map through string and see if index is present.
      word.map(e => {
          let index = word.indexOf(e)
          e > 1 ? e === ) : e === (
      })
    
    //if index is present > 1, replace with )
    //else replace with (
    }
    
    // Examples
    // "din"      =>  "((("
    // "recede"   =>  "()()()"
    // "Success"  =>  ")())())"
    // "(( @"     =>  "))((" 
    
    console.log(duplicateEncode('din'), '(((')
    console.log(duplicateEncode('recede'), '()()()')
    console.log(duplicateEncode('Success'), ')())())')
    console.log(duplicateEncode('(( @'), '))((')
    
    //second attempt
    function duplicateEncode(word){
    //Make all strings lowercase
       word.toLowerCase().split('')
    //map through string and see if index is present.
      let e = word[i]
      let index = word.indexOf(e)
      word.map(index => {
          return index > 1 ? e === ')' : index === '('
      })
    
    //if index is present > 1, replace with )
    //else replace with (
    }

    //frustrating because I feel like I'm kind of getting there? But then I didn't get solve it, so I need to review a soln.

    //ok, looked up a solution and will write pseudocode explaining what is happening so I understand.
    // going through online soln
    function duplicateEncode(word){
        //make an empty variable
        var unique='';
        //make word lowercase
        word = word.toLowerCase();
        //use a loop to define i
        for(var i=0; i<word.length; i++){
        //within loop, see if the last index of word[i], and i was previously defined, is equal to the index of word[i]
            if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            //if that is the case, then it only occurs once, and you add '(' to the empty var 'unique'
                unique += '(';
            }//if that is not the case, then it only occurs more than once, and you add ')' to the empty var 'unique'
            else{
                unique += ')';
            }
        }
        //then you return it!
        return unique;
    }
    //looking at this soln makes me feel a bit better with my efforts since I got some of it right. But I wasn't quite there. I didn't utilize both .lastIndexOf and .indexOf. And I was having a hard time defining 'e'; they solved that via a for loop. And they did an empty variable; I didn't even think about doing that. I think there are probably more eloquent ways of solving this challenge, but this one made sense to me.
 