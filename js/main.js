// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String


const hello = s =>
`Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

console.log(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
console.log(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
console.log(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
console.log(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )

// Code Below works on VSCode but get an error on codewars

function hello(name) {
  let nameLower = name.substring(1).toLowerCase()
  let firstLetter = name.charAt(0).toUpperCase()
  return `Hello, ${firstLetter.concat(nameLower)}!`  
}

console.log(hello('mIchael'))