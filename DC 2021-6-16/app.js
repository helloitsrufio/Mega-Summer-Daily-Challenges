// Given function updateVegetablesCollection (arr, veggie), see if 'veggie' exists in the array 'arr' 

//will we ever have an empty array? Do spaces or special characters matter?
//yes, or no. boolean value
function updateVegetablesCollection(arr){
    let veg = 'veggie'
    //filter arr so that if s = 'veggie', return with 'yes', otherwise return 'no'
    return arr.map(s=>s === veg? true:false)
}

console.log(updateVegetablesCollection(['broccoli', 'sprouts', 'veggie'], 'veggie'), true)
console.log(updateVegetablesCollection(['broccoli', 'sprouts', 'cucumber'], 'veggie'), false)
console.log(updateVegetablesCollection(['cauliflower']), false)



//given a certain veggie
//given an arr, specific veggie
function updateVegetablesCollection (arr, veggie) {
    //if, in the array, the index of specific veggie doesn't exist, push it to array
    if (arr.indexOf(veggie) === -1) {
        arr.push(veggie);
        //otherwise, console log array
    } else if (arr.indexOf(veggie) > -1) {
        console.log(arr + ' already exists in the arr collection.');
    }
}

console.log(updateVegetablesCollection(['potato', 'tomato', 'chillies', 'green-pepper'], 'spinach'));

console.log(updateVegetablesCollection(['potato', 'tomato', 'chillies', 'green-pepper'], 'chillies'));
//This isn't working when I try to run it. I'm not sure exactly what it is. I think maybe a refactoring of my own solution might work out better?


function updateVegetablesCollection(arr, veggie){
    //filter arr so that if s = whatever veggie is, return with 'yes', otherwise return 'no'
    return arr.map(s=>s === veggie? true:false)
}

console.log(updateVegetablesCollection(['broccoli', 'sprouts', 'veggie'], 'broccoli'), true)
console.log(updateVegetablesCollection(['broccoli', 'sprouts', 'cucumber'], 'spinach'), false)
console.log(updateVegetablesCollection(['cauliflower'], 'broccoli'), false)
//Adapted soln to accommodate any given veggie param.