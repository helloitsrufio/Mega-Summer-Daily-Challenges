// Please read through these before taking a look at the question:

// Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
// More Array Methods (https://javascript.info/array-methods)
// Array Methods Complexity (https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg)

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

//going to use Math.floor()

//Class soln:

//P: Never be empty, will always be all integer vals.
//R: Returning a rounded-down integer which is the avg
//E: 
    function getAverage(arr){
//P:    
        let sum = 0
        for({
            sum+=arr[i]
        })
        return sum/arr.length
    }

    console.log(getAverage([2,2,2,2]),2)
    console.log(getAverage([1,2,3,4,5,]),3)
    console.log(getAverage([1,1,1,1,1,1,1,2]),1)))

    //with arr methods
    function getAverage(arr){  
        return Math.floor(arr.reduce((a,c)=> a + c) / arr.length)//div by arr.length because that's the avg/total amount of elements in arr
            }
        
            console.log(getAverage([2,2,2,2]),2)
            console.log(getAverage([1,2,3,4,5,]),3)
            console.log(getAverage([1,1,1,1,1,1,1,2]),1)))

            //reduce() time complexity is linear because it's running once for each el of the arr.