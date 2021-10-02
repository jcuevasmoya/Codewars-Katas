function roundIt(n){
  let splitNum = n.toString().split('.')
  let a = parseInt(splitNum[0])
  let b = parseInt(splitNum[1])
  
  console.log(a, b)
  if(a < b){
    return Math.ceil(n)
  }else if (a > b ) {
    return Math.floor(n)
  }else {
    return Math.round(n)
  }
}

console.log(roundIt(3.45))
console.log(roundIt(34.5))
console.log(roundIt(34.56))
console.log(roundIt(45169.48271))
console.log(roundIt(9185.6619))
console.log(roundIt(257646.426787))