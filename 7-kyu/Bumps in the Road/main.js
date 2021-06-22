// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".


function bump(x){
  let str = x
  let count = (str.match(/n/g)||[]).length;
  if(count <= 15){
    return "Woohoo!"
  }else {
    return "Car Dead"
  }
}


console.log(bump("n"))
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))
console.log(bump("______n___n_"))
