function addLength(str) {
  let breakString = str.split(' ')
  console.log(breakString)
  breakString.forEach(word => console.log(word.length))
  console.log(breakString.map(word => `${word} ${word.length}`))
}

console.log(addLength('you will win'))