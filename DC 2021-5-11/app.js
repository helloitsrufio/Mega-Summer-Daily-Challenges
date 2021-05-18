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

function reverseArr(str){
    return str.split(' ').sort((a,b)=>a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1)).join(' ')
}

//so they split the string into words. Then they sort in alphabetical order with the condition that you are looking for the charcode of a at the end of the word minus the same for b. Then you join.


//spaces are valid. What do i do with special characters? If words have the same ending letter, they should be sorted in the original sort.
//return array of words that is sorted by alphabetical order via the last letter in the word

//make a function that takes in a str
function reverseArr(str){
    //split str into word arr
    return str.split(' ').sort((a,b)=>a.charCodeAt(a.length-1) = b.charCodeAt(b.length - 1)).join(' ')
    //sort based on last letter
    //return
}
//Cannot assign to a function call. What here am I assigning to a function call? I can't tell.
//Really weird. the only dif between the soln and my original soln is the .join(' ') which doesn't make sense if it's an array. Anyways, this is exactly the same as the previous soln and it just won't work. It says the function call thing...?
console.log(reverseArr('I am a cat'),'am a I cat')
console.log(reverseArr('Fish sticks are nasty'),'are Fish sticks nasty')
console.log(reverseArr('Coding is fun!'),'Coding fun is!')
