// The Fibbonacci numbers, commonly denoted F(n), form a sequence, called the Fibbonacci sequence, such that each num is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n-2), for n > 1.
// Given n, calculate F(n).

//Only takes in numbers. 
// Given a num, that number is composed of the numbers beneath it numerically. 
// If I am given F(6), F(6-1) + F(6-2) => 5 + 4n= 9? 
// If I am given F(9) 8 + 7
// Make a function
function fib(x){
    if(x.forEach(element => {
        element === ((element - 1) + (element -2))
    })){
        return element
    }else{
        return error
    }
}
// Make a loop 

function fib(x){
    for(x > 1){
        return (x-1) + (x -2);
    }
}
//missing for-loop initializer

//second time around after having seen the answer a few min ago
// fib(n) = fib(n-1) + fib(n-2)
function fib(x){
    let arr = [0,1]
    //forgot to do 'let' in front of i.
    for(i=2; i <= x; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    //forgot to do arr[x]
    return x
}

//third time around
//so I need to calculate F(n). 
// The fib sequence is F(n) = F(n-1) + F(n-2), remember
function fib(x){
let arr = [0,1]
for(i =2; i <= x; i++){
    arr[i] = arr[i-1] + arr[i-2]
}
return arr[x]
}

//Below is the answer; I got the third attempt right 100%! Hell yeah!

function fib(x){
let arr = [0,1]
for(let i = 2; i <= x; i++){
    arr[i] = arr[i - 1] + arr[i - 2]
}
return arr[x]
}