//Find the greatest common divisor of two positive integers. The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

//will always be positive. Will alawys be greater than or equal to 1. Always numbers? Any edge cases I should consider?
//we want the greatest common divisor of two given integers
console.log(gcd(6,18),6)
console.log(gcd(24,18),6)
console.log(gcd(144,60),12)

function gcd(x,y){
    //ensure than they are greater than/equal to 1 in a condition


}
//couldn't remember

//soln
function gcd(x,y){
    return y == 0 ? x : gcd(y, x % y)
}

//integers are +. x and y are always >= 1. 
//yield the greatest common divisor.
console.log(gcd(144,60),12)
console.log(gcd(35,5),5)
console.log(gcd(100,30),10)

function gcd(x,y){
    return y > 0 ? x: gcd(y,x%y)
}
//only problem is that I didn't know what to set y equal to. It has to be 0 because greatest common divisor. It's the smaller number so it needs to be 0 where x is the actual gcd.