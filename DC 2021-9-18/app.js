//You will be given an array of arrays and your task will be to return the num of unique arrays that can be formed by picking exactly one element from each subarray.

//For example, solve([[1,2], [4], [5,6]]) = 4 because it results in only 4 possibilities. They are [1,4,5], [1,4,6], [2,4,5],[2,4,6].

//Make sure that you don't count duplicates; for example solve([1,2], [4,4], [5,6,6]) = 4, since the extra outcomes are just duplicates.


function arrCombinations(arr){
    return arr.map(s=>[...new Set(s)].length)//gives an arr that's really a set. So no duplicates. Next step in the process is figuring out how many unique sets there are. We don't care about the content, just how many of them there are in the end.
}

//but Set has its own method instead of .length.

function arrCombinations(arr){
    return arr.map(s=> newSet(s).size).reduce((a,c)=> a*c, 1)//end up with an arr of singular integers. Map moves thru subarrays and returning how big that subarray is. For example, [2,3] would be 2 because there are 2 unique elements in the arr.
}

//set runs once for each elem in arr. So it's linear (O(n))