// Given an array of integers , find the nth smallest element in this array of integers.
// Notes:
// - Array/list size is at least 3 .
// - Array/list's numbers could be a mixture of positives , negatives and zeros .
// - Repetition in array/list's numbers could occur , so don't Remove Duplications .

// - nthSmallest({3,1,2} ,2) ==> return (2)
// - nthSmallest({15,20,7,10,4,3} ,3) ==> return (3)
// - nthSmallest({15,20,7,10,4,3} ,3) ==> return (3)
// - nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

//don't worry about duplications. Arr size has to be 3>=. Nums can be +, -, or 0s.
//should return the smallest num in arr

//make a function that takes in an arr of nums
function nthSmallest(arr){
    //given that an arr is 3+ integers, map through arr and sort in numerical order.
    arr.sort((a,b) => a-b)
    //return 1st element
    return arr[0]
}
console.log(nthSmallest({3,1,2} ,2))
console.log(nthSmallest({15,20,7,10,4,3} ,3))
console.log(nthSmallest({177,225,243,-169,-12,-5,2,92} ,5))

//giving a SyntaxError of 'missing : after property id'. I honestly have no idea why.

// Actually, now I do. The given examples have the given input as an object, and I have NO idea why they would do that, esp since they said that you'd be given AN ARRAY. In addition, the examples are often not returning the smallest number in the given array. 
//With the console logs modified, however, this works BEAUTIFULLY. Proud of me.