function kaprekarSplit(n){
  let squareNum = (n ** 2).toString()
  console.log(squareNum)
  let splitNum = squareNum.split('')
  console.log(splitNum)
  let half = Math.ceil(splitNum.length/ 2)
  let firstHalf = parseInt(splitNum.splice(0, half).join(''))
  console.log(firstHalf)
  let secondHalf = parseInt(splitNum.splice(-half).join(''))
  console.log(secondHalf)
  return firstHalf + secondHalf
}

console.log(kaprekarSplit(2223))