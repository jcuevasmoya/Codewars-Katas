// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
// Examples

// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

function isPalindrome(line) {
    let stringLine = String(line)
    let reverseLine = String(line).split('').reverse().join('')
    return reverseLine === stringLine
}

console.log(isPalindrome("anna"), true);
console.log(isPalindrome("walter"), false);
console.log(isPalindrome(12321), true);
console.log(isPalindrome(123456), false);
console.log(isPalindrome("."), true);
console.log(isPalindrome(".!!."), true);

