// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// Hint:  Create an array to hold winning pairs and create an object to store each number looped through. See if the sum - current number exists in the object, if so push current and stored value to your pairs array

// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

//P: Will I always be given an array? Will I ever be given a string or something that is not a number? Will not yield true or false. Do I need to account for if the asked for sum cannot be gotten by the given arr? 
//R: Returns the pairs that add up to a given sum. 
//E: So if my array given is [1,2,3,4,5,6] and I'm trying to get 6, then it would return [1,5], [2,4].
//   If my given array is [2,3,4,5,6,7] and I'm trying to get 7, then it would return [3,4], [2,5].
//   If my given array is [1,3,6,9,12], and I'm trying to get 15, then it would return [3,12], [6,9].
//P: Make a funciton that takes in two parameters.
function pairsThatMakeGivenSum(arr,sum,pair){
//   Make an arr that will hold winning pairs.
    let winningPair = [];
//   Loop through each # in an arr and put then in an object.
    for(i=0; i<pair.length; i++){
        {i}
    }
    for(number of arr){
//   If sum - current # exists in the obj, then push current and stored val to pairs arr.
        if(sum - number) == {i}{
            winningPair.push(number)
            winningPair.push(i)
        }};
    return winningPair;
}
//So it looks like the problem here is the fact that an expression is expected on line 28. I kind of know what an exp is but not enough to actually know. I tried to do this problem according to the hint, which honestly did give me a better grasp of it, but I still don't quite get it. I tried to use a for(of) loop and I've never actually used one of those before, so Idk if I'm doing it right. Not super sure how to put something into an obj, which isn't great tbh. 

//This is my teacher's soln:
// twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]
const twoSum = (array, sum) => {
    //I made this arr, so I'm happy to see that I did at least one thing right. They used const instead of let, which is prob better.
    const pairs = [];
    //They also made a blank obj. Smart.
    const store = {}
  //So they used for(of) and utilized two vars within it: part1 and part2. Used array from the og parameters, and sum from og parameters.
    for (let part1 of array) {
      const part2 = sum - part1;
      //What does it mean by 'not equal to -1'? Meaning if it is present? That makes sense.
      // if (store.indexOf(part2) !== -1){
      //    pairs.push([part1, part2]);
      // }
      //This line says, if {store} does not have part2 in it (which is sum - part1), then store = 1 with part1? So I guess if it means 1, which I thought meant it was present, then just set it equal to one. Not super sure here, but I think this is supposed to be the case that doesn't have the matching val in the obj.
      if(!store[part2]){
        store[part1] = 1
      }else{
          //Or else you push both to an arr.
        pairs.push([part1,part2])
      }
    }
    //Gotta return it ofc.
    return pairs;
  };
  //Doesn't 100% make sense to me so I'm going to ask a friend to explain.