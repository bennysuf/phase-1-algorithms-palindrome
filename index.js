function isPalindrome(word) {
  const arr = Array.from(word); //separates word into separate letters
  arr.reverse() // reverses order or letters
  const convert = arr.join(""); //removes commas
  
  if (convert === word) {
    return true 
  } else {
    return false
  }
  //   return "Input: " + word + " Output: " + true
  // } else { return "Input: " + word + " Output: " + false;
  // console.log(String(word))
//  }
}

/* 
  Add your pseudocode here
  turn into an array
  try to flip array order into new array
  check if new array is equal to old array
  return boolean result 
*/

/*
  Add written explanation of your solution here
  function takes argument and converts it into an array of separate letters.
  reverses the order of the letters and removes commas to make it one word again.
  checks if original argument matches the reversed converted word.
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
