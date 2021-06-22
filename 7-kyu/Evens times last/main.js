// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.


function evenLast(numbers) {
  // Good luck
  if(numbers.length === 0) return 0
  let evenIndex = numbers.filter((item, index)=>index % 2 === 0)
  let reduceNumbers = evenIndex.reduce((a,b)=>a+b)
  return reduceNumbers * numbers[numbers.length -1]
}




console.log(evenLast([2, 3, 4, 5]))