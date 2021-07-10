// Classmate answer
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
let result1 = longest(a, b) //=> "abcdefklmopqwxy"
console.log(result1);
function longest(str1, str2) {
  //create a object to store letters
  //loop through str1
    //check if key exists in object
      //increment key += 1
    //otherwise 
      //add current key to object and set value to 1
  //loop through str2
    //check if key exists in object
      //increment key += 1
    //otherwise 
      //add current key to object and set value to 1
  //return this expression(call Object.keys passing in resultObj.join(''));

  const hashTable = {};

  for (const char of str1) {
    if (hashTable[char]) {
      hashTable[char]++;
    } else {
      hashTable[char] = 1;
    }
  }

  for (const char of str2) {
    if (hashTable[char]) {
      hashTable[char]++;
    } else {
      hashTable[char] = 1;
    }
  }

  return Object.keys(hashTable).join('');
}
//TBH not really sure what my classmate was doing. I don't know what a hashtable is, and I need to figure that you. He utilized objects too and I need more work and exp with that. 


//Another classmate answer
function longString (a,b) {
    const longStr = a+b
    return longStr.split("").sort().filter((v,i,arr) => v!==arr[i-1]).join()
    }


//Teacher soln
const longestPossible = (str1,str2) => [...new Set(str1+str2)].sort().join('')

console.log(longestPossible('xyaabbbccccdefww','xxxxyyyyabklmnopq'))

//I don't know what .set() does, or .reduce(), or a spread table. NEED TO FIGURE THIS STUFF OUT. 