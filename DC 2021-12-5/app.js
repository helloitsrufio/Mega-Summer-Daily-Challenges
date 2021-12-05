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

//From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

//P: Does it only take in strings? Should it be looking for special characters? Does capitalization matter at all? 
//R: Return a boolean value (true or false)
//E: See console logs.
//P: 
// ______attempt 1______

str.split().filter(x => x)

const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

    function ransomNote(str){
        let newMag = magazine.split(' ')
        for(const word of str){
            if(word == newMag){
                return 'true'
            }else{
                return 'false'
            }
        }

    }
    //saying that magazine isn't defined, but it is? I put 'const' in front of it and even tried 'let'. When I put 'magazine' outside of function, it just comes back undefined. So it's working, but it's not getting what I want it to.
//   Split string based on spaces
//   Make magazine var
//   Use filter to determine if words go together?

console.log(ransomNote("sit ad est love", magazine), false)
console.log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)

// ______attempt 2______
// Hint: Take a deep breath, you have seen how to solve this brute force and optimally. Either brute force checking every magazine word against every ransom word OR create an object holding all the magazine words and check each ransom word against this object 
const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

function ransomNote(str){
    let mapMe = {}
    let newMag = magazine.split(' ')
    newMag.map(m => mapMe.push(m))
    return newMag
}
//having trouble pushing elements in magazine into object. Can't use .push() because it's an array method, and an object obviously is not an array. But I'm not sure how else to put elements in. 
//here I'm trying to create an obj holding all magazine words as the hint recommends. Not successful though.

