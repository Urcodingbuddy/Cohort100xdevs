/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let lowstr1 = str1.toLowerCase();
    let lowstr2 = str2.toLowerCase();
    return lowstr1 === lowstr2;
}

module.exports = isAnagram;


const isAnagram = require('./isAnagram');

console.log(isAnagram('spar', 'rasp')); // true
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('Astronomer', 'Moon starer')); // true