//Done in class


//Remove all consecutive duplicate words from a string, leaving only first word entries. For example:
//"alpha beta beta gamma gamma gama delta alpha beta beta gamma gamma gamma delta"
//-->"alpha beta gamma delta alpha beta gamma delta"


//Parameters
function removeConsecutive(string) {
    // split string
    return string.split(' ').filter((el, i, arr) => el != arr[i + 1]).join(' ')
    // filter (el, i, arr)
    // join
  }
  
  //Results
  console.log(removeConsecutive("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))
  //alpha beta gamma delta alpha beta gamma delta
  console.log(removeConsecutive("dog cat cat hamster hamster horse cat dog dog"))
  //"dog cat hamster horse cat dog"
  
  //Examples
  
  
  //Pseudocode

  //I think that the way that my teammate solved it was really interesting. I'm not sure if I fully understand it tbh. I need to think about it more. 

  //Class soln was almost completely the same, just one big difference: i-1 vs i+1. 