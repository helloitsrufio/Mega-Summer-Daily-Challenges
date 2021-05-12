// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.
//want to return alphabetically sorted arr by last letter

//make a function that takes in a string
function reverseArr(str){
    //chop string into individual words in arr
    let modifiedStr = str.split(' ')
    modifiedStr.map(s=>s.reverse().sort())
    // let modifiedStr = str.split(' ').reverse().sort((a,b)=>a+b).join('')
    console.log(modifiedStr)
    //reverse string and sort

    //reverse and return
}
console.log(reverseArr('I love you'), ['love', 'I', 'you'])
console.log(reverseArr('My name is Ruth'), ['name', 'Ruth', 
'is', 'my'])
console.log(reverseArr('How much wood could'), ['wood','could', 'much', 'How'])
//gotten a little stuck. I've gotten it to the point (don't have the code there anymore tho), where I've reversed all individual letters...but that's it.