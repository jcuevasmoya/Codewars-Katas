// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  return array.reduce((a,b)=>a+b)/array.length
}

console.log(find_average([1,1,1]))
console.log(find_average([1,2,3]))
console.log(find_average([1,2,3,4]))
