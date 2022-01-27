//Create a function that takes in a string and outputs the number of times each word is used.

//P: Will it ever take in a number? Any special char? 
//R: Return an array with the word and how many times it returns.
//E: If I am given "I am a dog dog", should return ['I': 1, 'am': 1, 'a': 1, 'dog': 2]
//   If I am given "How much wood can a woodchuck chuck if a woodchuck could chuck wood?", returns "['How': 1, 'much': 1, 'wood': 2, 'can': 1, 'a': 2, 'woodchuck': 2, 'chuck': 2, 'if': 1, 'could': 1]"
//   If I am given 'Star star starfish star starfish fish', should return ['star': 3, 'starfish': 2, 'fish': 1]

// First attempt that did not work

//P: Create a function that takes in a str
function numbersWordsRepeat(str){
//   Split string into individual words and make arr by splitting by ' '. Make sure all words are lowercase 
   let newArr = str.split(' ').toLowerCase;
    let count = newArr.filter(x => x == word).length
}

//Second attempt
function numbersWordsRepeat(str, num){
    let arr = str.split(' '.toLowerCase)
    let numOfTimes = 0;
    for(i=0; i < arr.length; i++){
        if(arr[i] == num){
            numOfTimes++
        }}
    return `${arr[i]} : ${numOfTimes}`
}
//Found this soln on the web. Returns "undefined:0" Tried a template literal so that it would yield a pretty word + num of occurences. Didn't work.


//Third attempt
function numbersWordsRepeat(str){
    let arr = str.toLowerCase().split(' ')
    let count = 0;
    let query = arr[i];
    for(let i = 0;i < str.length; i++) {
        if( str[i] === query ) {
            count++;
        }
    }
    console.log(count);
}
//Returns 0 and then 'undefined'

//Fourth attempt
function numbersWordsRepeat(str){
    let arr = str.toLowerCase().split(' ')
    for(i=0; i < str.length; i++){
        arr.map((e, n) => {
            if(e === arr[i]){
                return n++
            }
        })}
}
//Returns 'undefined'.

//Have NOT solved it, but at least with each attempt I am not getting errors. I think the big issue is that I am having a hell of a time grabbing each element in the array. Without this, I can't even count it. But I haven't figured out the counting mechanism either really. A bit, but not well. I've spent a long time on this problem so far. :/

//This sucks