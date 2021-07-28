// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

//P: Will it ever include anything that isn't a number? Will I ever get repeat numbers?
//R: Should return two biggest numbers in numerical order.
//E: 1. If I am given [3,4,2,1], yields [3,4]
//   2. If I am given [42,33,1,90,56], yields [56,90]
//   3. If I am given [23,1,11,111,24], yiels [24,111]

//P: 
//  Make a function that takes in one parameter
function twoOldestAges(ages){
    //   Sort numbers in array in numerical order
       let orderedAges = ages.sort((a,b)=>a-b)
    //   Map through and only return biggest numbers?
        // orderedAges.map(x=>return x>=orderedAges.length)
        let biggestNum = Math.max(...orderedAges)
        index = orderedAges.indexOf(biggestNum)
        console.log(orderedAges.splice(index,orderedAges.length-1))
        let secondBiggestNum = Math.max(...orderedAges)
        let result = []
        result.push(secondBiggestNum)
        return result.push(biggestNum)
    }
    //This was my attempt. Sort them numerically, get the biggest number, chop that biggest num off the original array, then get the new biggest number, and then put them together in a new array and return it. It is not concise, nor does it work, but I feel proud of thinking through it and feeling like I understand. 

    //Looking at CodeWars answers:
    function twoOldestAges(ages){
        return ages.sort(function(a,b){return a-b;}).slice(-2);
      }
      //So they did largely the same thing I did. They sorted based on a,b and subtracting the two, and then they sliced using -2. Looking this up, this simply returns the last two items in an array. Makes sense. 
      //I didn't understand function(a,b){return a-b}, but looking it up, here's why it works. .sort() sorts the elements depending on the function's return val. If the val is (-), then the val in a will be before b. If it is 0, ordering will stay the same. If (+), the val in b will be ordered before a. So it sorts it thusly in ascending order. 