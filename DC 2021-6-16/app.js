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