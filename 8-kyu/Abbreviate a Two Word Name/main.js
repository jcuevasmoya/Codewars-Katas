
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F


function abbrevName(name){
  let nameSplit = name.split(' ')
  let firstLetters = nameSplit.map(x => x[0])
  firstLettersJoin = firstLetters.join().replace(',', '.')
  let upperCase = firstLettersJoin.toUpperCase()
  }

  console.log(abbrevName("Sam Harris"))
  console.log(abbrevName("Patrick Feenan"))
  console.log(abbrevName("Evan Cole"))
  console.log(abbrevName("P Favuzzi"))
  console.log(abbrevName("David Mendieta"))


