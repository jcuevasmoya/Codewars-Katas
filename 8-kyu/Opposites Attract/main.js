// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

const evenNum = num => num % 2 === 0
const lovefunc = (flower1, flower2) =>
  (evenNum(flower1) && !evenNum(flower2)) || (!evenNum(flower1) && evenNum(flower2))


  
console.log(lovefunc(1,4))
console.log(lovefunc(2,2))
console.log(lovefunc(0,1))
