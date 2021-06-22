// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
  let removeH = url.replace('http://', '')
  let removeC = removeH.replace('.com', '')
  let removeW = removeC.replace('www.', '')
  let removeS = removeW.replace('https://','')
  let removeDot = removeS.split('.')[0]
  return removeDot
}



console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))