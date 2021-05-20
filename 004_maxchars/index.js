// --- Directions
// Given a string, return the character that is most
// commonly used in the string.

// abccccccd ====> func() =====> 'c'

function maxChar(str){
    const charMap = {}
    let max = 0
    let maxChar = ''

    for(let char of str){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxChar("abcccc"))

// charMap = {
//     a:1,
//     b:1,
//     c:2
// }

// max = 2
// maxChar = 'c'