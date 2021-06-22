// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((a,b)=>a+ Number(b),0)
}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));