// What is the recursive solution for the Fibonacci sequence?

//f! 2! -> 1 * 2 = 2; 3! 3 * 2 * 1 = 6
//should return the sum of numbers making up f
console.log(fib(3),6)
console.log(fib(4),24)
console.log(fib(5),120)


//make a function that takes in a num f
function fib(f){
//f >= 2
if(f < 2){
    return f
}else{
    return f * fib(f-1)
}
//num multiplied by recursion f * (f-1)
}
//This was not the solution, although it worked. This was:

function fib(f){
    return f < 2 ? f : fib(f-1) + fib(f-2)
}

//Tryna get more info on this since it doesn't work in the console AND I don't understand why it's + and not *.

//Create the function factorial that receives n and returns n!. You have to use recursion.

//make a function that takes in our num n
function fac(n){
// make an arr with 0 and 1 already in it. 
    let arr = [0,1]
// for loop which establishes i
    for(i = 2; i <= n; i++){
// in for loop, set arr[i] equal to f(n) = f(n-1) + f(n-2)
        arr[i] = arr[i-1] + arr[i-2]
    }
// return array of original num
    return arr[n]
}

console.log(fib(3),6)
console.log(fib(4),24)
console.log(fib(3),120)