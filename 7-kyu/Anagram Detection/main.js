// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
  let splitTest = test.toLowerCase().split('').sort().join()
  let splitOriginal = original.toLowerCase().split('').sort().join()
  return splitOriginal === splitTest
};



console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("Twoo", "WooT"))

console.log(isAnagram("dumble", "bumble"))
console.log(isAnagram("ound", "round"))
console.log(isAnagram("apple", "pale"))