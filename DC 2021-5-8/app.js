// Create the function factorial that receives n and returns n!. You have to use recursion.

//n! the product of all the number that came before it in numerical order. Recursion = calling function within function
//look for sum of all those numbers.

//make a function that takes in a num n
function factorial(n){
    //start off at 2 for base case
    return n<2 ? n : n * factorial(n-1)
    //return the number times the number that came before it. 
}
console.log(factorial(3),6)
console.log(factorial(4),24)
console.log(factorial(5),120)
//feeling pretty comfortable with this and explaining it. It only took me 4 minutes to do this time!