//linear - runs with respect to the input size. As the input increases in length, runtime also increases. 
//O(n)2 -> double the size of the input, double the time needed to run. 

//he likes to ask -> pretend someone else wrote this code and sent it to you as a code review. Can you tell me 1-3 comments about it? What would you do to make it better/ready?

//say things that you're confident in, and if you're not, tell the interviewer.

//read the entire problem. Ask interviewer if they have a written version of the problem statement. 
//---------

// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial

// NOTES:

//     The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

//     I have removed the use of require in the javascript language.

//factorial is f! = F(n-1)*F(n-2)
// https://www.codewars.com/kata/557f6437bf8dcdd135000010/train/javascript