// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038


//P: Does it take in numbers? Special chars? 
//R: Should return true or false.
//E:
//P: Make a function that takes in two parameters.
//   Use .includes() to see if a string hhas a designated substring
//   Return true or false.

function ransomNote(substr, str){
    if(str.includes(substr)){
        return true
    }else{
        return false
    }
}

// MongoDB object langname Val, audio sample, file



//Classmate soln using hashmap

function ransomNote(str, mag) {
    const magazineWords = {}
    let magArray = mag.split(' ')
    for (let word of magArray) {
      word = word.replace(/[^a-z]/gi, "")
      magazineWords[word] = magazineWords[word] + 1 || 1
    }
    
    let strArr = str.split(' ')
    for (let inputWord of strArr) {
      if (magazineWords[inputWord]) {
        magazineWords[inputWord] = magazineWords[inputWord] - 1
      } else {
        return false
      }
    }
    return true;
  }