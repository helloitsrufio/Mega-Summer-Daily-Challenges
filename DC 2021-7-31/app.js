// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// From https://www.codewars.com/kata/54ff3102c1bad923760001f3

//P: No upper case. No letters. Any special chars like accented vowels? Are you against me using regex? Any nums?
//R: Should yield a string containing only the vowels of 'a', 'e', 'i', 'o', and 'u'.
//E: Ex. 1 - If I'm given 'apple', should return 'ae'
//   Ex. 2 - If I'm given 'whatareyoudoing', should return 'aaeouoi'
//   Ex. 3 - If I'm given 'youareawesome', should return 'ouaeaeoe'
//P:
//Get a function that takes in a string.
function vowels(str){
//return a regex eqn
return /[aeiou]/.test(str)
}

//Second attempt:
function getCount(str) {
    let arr = []
    for(i=0;i<str.length;i++){
        let i === (/[aeiou]/.test(str))
        arr.push(i)
    }
    return arr
  }
  //Ahhh I didn't read the question closely enough. It wants the COUNT of vowels in a given string. So it doesn't want all the vowels returned, just how many there are.
  //So PREP should look like this:

    //P: No upper case. No letters. Any special chars like accented vowels? Are you against me using regex? Any nums?
    //R: Should yield an arr that states the vowel and how many times it occurs in the str.
    //E: Ex. 1 - If I'm given 'apple', should return ['a':1, 'e':1, 'i':0, 'o':0, 'u':0]
    //   Ex. 2 - If I'm given 'whatareyoudoing', should return ['a':2, 'e':1, 'i':1, 'o':2, 'u':1]
    //   Ex. 3 - If I'm given 'youareawesome', should return 'ouaeaeoe' ['a':2, 'e':3, 'i':0, 'o':2, 'u':1]
    //P: Make a function that takes in a str
    //   Make a var that counts starting at 0.
    //   Make a for loop that states if i = arr[i], then the previous var++
    //   Return 

 //Wrong AGAIN. Just wants how many times ANY vowels occur. SOOOO
    //P: No upper case. No letters. Any special chars like accented vowels? Are you against me using regex? Any nums?
    //R: Should yield a var that says a number (the number being how many times any vowels were counted.)
    //E: Ex. 1 - If I'm given 'apple', should return 2
    //   Ex. 2 - If I'm given 'whatareyoudoing', should return 7
    //   Ex. 3 - If I'm given 'youareawesome', should return 'ouaeaeoe' 8
    //P: Make a function that takes in a str
    function getCount(str){
    //   Make a var that counts starting at 0.
        const count = 0
    //  Make an arr with the vowels in it.
        const arr = ['a','e','i','o','u']
    //   Make a for loop that states if i = arr[i], then the previous var++
        for(char of str){
            if(char == arr[i]){
                count++
            }
        }
        return count
    //   Return var
    }
//You know I was actually feeling really good about this, but I didn't define i, so it didn't work. BUUUUUT if you take the [i] out it does count!

//All right! Looking at the solutions!
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
  //I ALMOST had something like this. Almost. I went through several versions of the regex eqn and did get /[aeiou]/ at least. I didn't think I'd have to do the i because the problem said that I'd be given only lowercase letters anyway. 
  //Never seen .match() before, but it allows you to search a string for whatever is encompassed in its parentheses. So basically what that first part is saying is look at the str, and match any a's, e's, i's, o's, or u's. Make sure that case doesn't matter (or it's all lowercase) and it applies to every vowel in the string.
  //Now where I'm not sure is the  ||[]. Or an empty array? I don't quite understand why we'd want an empty array.
  //.length makes sense because it gets that count we want.

  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }
//Now this looks more like my last attempt. The first two lines are basically the same. They did nested for loops, giving them i, while making i less than str.length. 
//What is interesting is the next line. Another for loop where j is less than vowels.length (vowels being the vowel array).
//That allowed them to use an if conditional and say if str[i] === vowels[j], then add one to the count. So it looks like where I got it wrong was not doing that second for loop that brought in the vowel array.

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }
  //so for this one they use .replace(), which I also haven't seen before. It has two parameters. Basically, it takes whatever the first one is and replaces it with the second...except that doesn't really make sense here. Wouldn't this be getting rid of all the vowels? Idk. But it does work.

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }
//I think this one is my fav tbh. You return the str, but first you split it based on a char by char basis. Then you filter it. Given c is 'aeiouAEIOU', if str includes c, keep it, and then .lenght for how many vowels.