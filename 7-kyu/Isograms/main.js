// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


const isIsogram = (str) =>{
  return new Set(str.toLowerCase()).size === str.length
}


console.log( isIsogram("Dermatoglyphics"))
console.log( isIsogram("isogram"))
console.log( isIsogram("aba"))
console.log( isIsogram("moOse"))
console.log( isIsogram("isIsogram"))
console.log( isIsogram(""))