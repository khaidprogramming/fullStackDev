/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let newString = str.toLowerCase();
    console.log(newString);
    
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0;i<str.length;i++){
      for(let j = 0;j<vowel.length;j++){
       if(newString[i] == vowel[j]){
        count++;
        // break;
       }
      }
    }
    return count;
}



module.exports = countVowels;

let result = countVowels("OPenAI");
console.log(result);