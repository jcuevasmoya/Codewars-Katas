// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

function ensureQuestion(s) {
  if(s.substr(-1) === '?'){
    return s
  }else{
    return `${s}?`
  }
}

// short answer

const ensureQuestion = s => s.endsWith('?') ? s : s+'?'

console.log(ensureQuestion(""),"?","Expected: '?'");
console.log(ensureQuestion("Yes"),"Yes?","Expected: '?'");
console.log(ensureQuestion("No?"),"No?","Expected: '?'");
