// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


let countSheep = function (num){
  for(let i = 0; i <= num; i++){
    let result = ''
    let sentence = 'sheep...'
    for(let i = 1; i <= num; i++){
      result += `${i} ${sentence}`
    }
    return result
  }
}

console.log(countSheep(3))