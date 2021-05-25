//Given var array = ['a', 'b', 'a', 'c', 'a', 'd'], find all occurrences of the element 'a'.
 
//given the above array.
//return number of occurences of 'a'.

//add the var
var array = ['a', 'b', 'a', 'c', 'a', 'd']
//add a function that takes in that variable?
function getA() {
    return array.filter(s=>s === 'a').length
}
//filter thru array and see if anything matches 'a'.
//then get the .length and return
//idk how to do it with a predetermined array! But I think I can do it with an arr param
function getA(arr){
    return arr.filter(s=>s === 'a').length
}
console.log(['a', 'b', 'a', 'c', 'a', 'd'])
//no...this isn't working either, which is really weird because i feel like it should. I'm at a loss. not even reducing the nums of = works.

function occurrencesOfA(arr){
    //filter if certain el is a
    return arr.filter(el=>el === 'a').length
    //return .length to see how many occurrences
}
//Well...I did have it right. I just put the function call in the console.log. I only was returning that one array. It had nothing to do with the function, so I'm pretty proud of myself for getting this one.