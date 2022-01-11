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

//so this is the other soln I had and honestly I kinda hate it. But let's explain it:
//function taking in an array
function occurrencesOfA(array){
    //making an empty arr
    var indices = [];
    //setting element to be equal to 'a'
    var element = 'a';
    //setting a var idx to get the index of 'a'
    var idx = array.indexOf(element);
    //white the index of 'a' exists,
    while (idx != -1) {
        //push it to the indices arr
      indices.push(idx);
      //then set the index of a equal to the index of 'a' and index of 'a' plus one.
      idx = array.indexOf(element, idx + 1);
    }
    
    console.log(indices);
    // [0, 2, 4]
    }