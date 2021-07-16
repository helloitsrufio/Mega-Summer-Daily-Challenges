// Make sure you understand these before taking a look at the question:
// Objects (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

//Make sure you remember/review bracket notation for objects!  You can check if a property exists and increment a value tied to that property HINT HINT!

// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//Parameters
//Are there any special characters? 
//R: Should get something like {a:2, b:1} for aba
//E: ex. 1 -> 'happy children' -> {'a':1, 'c':1, 'd':1, 'e':1, 'h': 2, 'i':1, 'l':1, 'n':1, 'p': 2, 'r': 1, 'y': 1}
//   ex. 2: 'hello' -> {'e':1, 'h': 1, 'l': 2, 'o': 1}
//   ex. 3: 'Ruth Reed' -> {'d': 1, 'e': 2, 'h': 1, 'r': 2, 't': 1, 'u': 1}
//P:
//   Make a function
    function numOfOccurences(str){
//     Break string down into each individual char
let newStr = str.split('').sort()
let new Object = {
    newStr
//     Sort into alphabetical order 
//     Put all elements into an object
    }

//Having trouble. I really need to go through OOP again and actually implement it in my code. I learned it, but I have yet to find the use for it. I am sure that's my bad, though. I am really not sure as to how I can check if a random property exists and then increment its associated value? I understand the idea, but its implementation...oof.

//Teacher soln
function count(){
    let charCount = {}
    str.split('').forEach(char => charCount[char] ? charCount[char]++ : charCount[char]=1)
    return charCount
//If you look @ charCount, is there a property in charCount that has 'a' (or whatever letter it is)
}
console.log(count('aba'),'{a: 2, b: 1}')

//It's nice going through it because it makes sense! But it's also frustrating because it's like, "Damn Ruth why didn't you get that?" It makes sense now. I did get the .split(''), so I'm happy about that at least. You can see the beginnings and how I could get there, but I'm not quite there.