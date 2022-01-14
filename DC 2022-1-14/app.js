// The Fibbonacci numbers, commonly denoted F(n), form a sequence, called the Fibbonacci sequence, such that each num is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n-2), for n > 1.
// Given n, calculate F(n).
// num = n - 1 & n-2. Always given a num? 
// result of fibonacci sequence of given number

//Start out w/ function that takes in a num n
function fib(n){
    //assign arr equal to 0 and 1 since that's where it starts from
    let arr = [0,1]
    //for loop to get i
    for(i>1;i<=n;i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
        //arr[i] will be equal to the F(n-1) + F(n-2)
    return arr[n]
    // return arr[n]
}
console.log(fib(3),3)
console.log(fib(4),6)
console.log(fib(5),7)

//feeling pretty comfortable with this. Soln looked the same except I didn't set i = 1; i said i>1.