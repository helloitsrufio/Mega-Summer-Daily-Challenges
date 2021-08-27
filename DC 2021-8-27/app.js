//The Fibbonacci numbers, commonly denoted F(n), form a sequence, called the Fibbonacci sequence, such that each num is the sum of the two preceding ones, starting from 0 and 1. That is,

//F(0) = 0, F(1) = 1
//F(n) = F(n - 1) + F(n-2), for n > 1.
//Given n, calculate F(n).


function fibb(n){
    let arr = [0,1]
    for(let i = 2; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}