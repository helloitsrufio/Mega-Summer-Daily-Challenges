// You are given an array of prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Input: prices = [7,6,4,3,1]
// Output: 0

// Hint:  set a minimum price var to the biggest num possible 
//        and max profit to 0. 
//        Loop through all prices and 
//        if current price is lower than min {
//        it becomes the new min } 
//       else {take the current price and subtract the current min to get the max profit!}

// From: https://leetcode.com/problems/best-time-to-buy-and-sell-stock

//P: Can it take in anything besides #s? Will you always have those two parameters?
//R: 

//This is what leetcode starts off with and tbh I have no idea what that's doing.
class Solution {
    public:
        int maxProfit(vector<int>& prices) {
            
        };
    };


    function solution(arr) {
//        set a minimum price var to the biggest num possible 
        const minPrice = arr.length
//        and max profit to 0. 
        const maxProfit = 0
//        Loop through all prices and 
        for(i=0; i>arr.length; i++){
//        if current price is lower than min {
            if(i<minPrice){
 //        it becomes the new min } 
                i === minPrice
         //else {take the current price and subtract the current min to get the max profit!}
            }else{
                i - minPrice == maxProfit;
            }
            return [minPrice, maxProfit]
        }

    }

    //Getting an invalid assignment on the left-hand side...not sure what that means. I thought it had beef with the === in line 44, but fixing that didn't change its mind.

    //Ok, changed the = in line 47 to ==, and then put the return within the for loop. I'm getting undefined, which is much better than what I was getting before (just an error)

    //I tried to change line 49 for the two vars to subtract from one another (I switched up their order too) and it still returned undefined.