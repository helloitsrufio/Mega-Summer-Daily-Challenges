// Given var array = ['a', 'b', 'a', 'c', 'a', 'd'], find all occurrences of the element 'a'.

//always given given arr? edge cases I should look out for?
//should return a number which is how many occurrences there were of the element 'a'.
//
console.log(occurrencesOfA(['a', 'b', 'a', 'c', 'a', 'd']),3)

function occurrencesOfA(arr){
    //filter if certain el is a
    return arr.filter(el=>el === 'a').length
    //return .length to see how many occurrences
}

//OMG FIRST FUCKING TRYYYYYYYYY. I'm so pumped! I just worked through it and then got the answer!