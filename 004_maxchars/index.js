// --- Directions
// Given a string, return the character that is most
// commonly used in the string.

// abccccccd ====> func() =====> 'c'

function maxChar(str){
    const charMap = {}
    let max = 0
    let maxChar = ''

    for(let char of str){ //for...of loop [arrays]
        if(charMap[char]){
            charMap[char]++ 
        }else{
            charMap[char] = 1
        }
    }

    for(let char in charMap){ //for...in loop [objects]
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }

    // return maxChar
}

console.log(maxChar("abcccc"))


//---------- 1st FOR...OF FLOW --------

// //1st loop --- charMap[a]
// charMap = {}
// //else... charMap[a] = 1
// charMap = {
//     a: 1
// }

// //2nd loop ---- charMap[b]
// charMap = {
//     a: 1
// }
// //else.... charMap[b] = 1
// charMap = {
//     a: 1,
//     b: 1
// }

// //3rd loop ----- charMap[c]
// charMap = {
//     a: 1,
//     b: 1
// }
// //else.... charMap[c] = 1
// charMap = {
//     a:1,
//     b:1,
//     c:1
// }

// //4th loop --- charMap[c] 
// charMap = {
//     a:1,
//     b:1,
//     c:1
// }
// //true on if statement
// charMap = {
//     a:1,
//     b:1,
//     c:2
// }

// //after 6th loop....
// charMap = {
//     a:1,
//     b:1,
//     c:4
// }