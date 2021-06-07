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
