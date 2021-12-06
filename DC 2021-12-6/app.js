// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

//P: Does it only take in integers? does it always take in arrays? Any special chars?
//R: Should return pairs of numbers that add up to a given sum.
//E: See console logs
//P: So I need to use a hash map. I will have two parameters

//-----my attempt-----
    function twoSum(arr, sum){
        //gotta make a map obj if we're hashmapping
        let map = {}
        //
        for(let i=0; i < arr.length; i++){
            map[i]
        }
    
        for(const num of arr){
            if(num[i-1]+[i-2] === sum){
                return [i-1, i-2]
            }
        }
    }

    console.log(twoSum([1,2,2,3,4], 4), [[2,2], [3,1]])

    //-----teacher soln-----
    //want to return an arr that contains all arr pairs.
function twoSum(arr, sum){
    const pairs = []
    const nums = {}

    for(const num1 of arr){
        //all right, we're going to loop thru all the numbers. We'll take that num and subtract from sum
        const num2 = sum - num1
        //if we look at nums object and num2 is not in object already, we know we don't have a pair
        if(!nums[num2]){
            //if we don't have a pair, we want to put it into object.
            nums[num1] = 1
        }else{
            //if we did find that num, we want to push it to the arr!
            pairs.push([num1, num2])
        }
    }
    return pairs
}
//want to loop thru obj
//we're looking at the num 1 and the sum. I want to loop thru and see if the sum - 1 exists inside of obj.
//if it exists inside of obj, we're found a pair
//if it's not in our obj, add num to obj (like 1: 1, 2: 1, then is the next 2. That's a pair! And then it goes to 3, which results in 1, which is another pair!)