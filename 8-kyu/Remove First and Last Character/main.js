// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
  let sliceFirst = str.slice(1)
  let sliceLast = sliceFirst.slice(0, sliceFirst.length -1)
  return sliceLast
}

console.log(removeChar('eloquent'))
console.log(removeChar('eloquent'))
console.log(removeChar('country'))
console.log(removeChar('person'))
console.log(removeChar('place'))