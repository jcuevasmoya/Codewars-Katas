// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"


function sumStr(a,b) {
  let num1 = Number(a)
  let num2 = Number(b)
  let sum = num1 + num2
  return sum.toString()
}



console.log(sumStr("4","5"));
console.log(sumStr("34","5"))

