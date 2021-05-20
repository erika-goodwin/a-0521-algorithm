// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.

// abba ====> reverse function ====> abba
// abcdefg =====> reverse function ====> gfedcba
// racecar ===> reverse function ===> racecar

function palindrome1(str){
    const reversed = str.split('').reverse().join('')
    return str === reversed
}

// console.log(palindrome1("abbacasdasedaeqwr"))

function palindrome2(str){
    // ['a','b','b','a']
    return str.split('').every((char, index) => {
        return char === str[str.length -index -1]
    })
}

console.log(palindrome2("abba"))

// const testArr = ['a','b','c']
// console.log(testArr[testArr.length -1])