/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowered = str.toLowerCase();
  let cleanWord = lowered.replace(/[^A-Z0-9]+/ig, ""); 
  let string = cleanWord.split("").reverse().join("");
  return cleanWord === string;
}



module.exports = isPalindrome;
let result = isPalindrome("weew");
console.log(result);


