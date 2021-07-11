// Make sure you understand these before taking a look at the question:
// Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
// Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
// indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

// // You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// // For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// // Test.assertEquals(repeats([4,5,7,5,4,8]),15);
// // Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
// // Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// // Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// // Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);

// PREP:
// P: Takes in only numbers, never strings. Can have unlimited amount of elements. There will always be some elements that occur twice. No special characters. 
// R: Sum of numbers that only occur once. 
// E: ex. 1: [1,4,6,6,3,1] -> 4 + 3 = 7. Yield 7. ; ex. 2: [10,20,12,10,44] -> 20 + 12 + 44 = 74. ; ex. 3: [8,3,52,40,52,3,23] -> 8 + 40 + 23 = 71.
// P: 
    //Write a function that takes in an array. 
    function repeats(arr){
        //filter out the index of repeated numbers
            let result = arr.filter((item, index)=>{arr.indexOf(item === index)})
        //Reduce and return answer. 
           return result.reduce(((acc,c) => acc + c 
           ),0)
    };
    //Very frustrated with this one. Reduce() is such a hard function for me. I thought I got the format right, but I kept having to adjust it. Idk really what the 0 is for, but codewars got mad at me for not having it. Didn't solve; just got a 0 instead of any actual answer. Not sure what I did wrong. Also I found the second line online and I really don't understand how it actually gets rid of any extra elements. It doesn't make sense to me. 

    //Looking at the answer, it looks like I only needed 'item' or 'index' and not both. And then instead of those being equal to each other, i could have just set the indexOf to lastIndexOf. When it comes to the reduce, this is the format used: reduce((a,b) => a +b, 0). So it looks like what I did wrong was separating the conditions from 0 with parentheses and that's about it?