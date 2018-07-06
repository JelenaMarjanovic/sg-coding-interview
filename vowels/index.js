// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// #1
function vowels(str) {
  let counter = 0;
  // const checker = 'aeiou';
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counter++;
    }
  }

  return counter;
}

module.exports = vowels;

// #2
// function vowels(str) {
//   // g - doesn't stop after finding the first match
//   // i - case insensitive
//   // match method returns either an array of matches or null
//   const matches = str.match(/[aeiou]/gi);
// 
//   return matches ? matches.length : 0;
// }