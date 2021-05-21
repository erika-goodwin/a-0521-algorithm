// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB){

    //Solution 1
    // const aCharMap = buildCharMap(stringA) //{ a:1,b:2,c:1 }
    // const bCharMap = buildCharMap(stringB) //{ a:1,b:5, c:1}

    // // const obj = { a:1,b:2,c:1 }
    // // console.log(Object.keys(obj))

    // if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length ){
    //     return false
    // }

    // for(let char in aCharMap){
    //     if(aCharMap[char] !== bCharMap[char]){
    //         return false
    //     }
    // }

    // return true


    //Solution 2
    //Use REGEX
    return cleanString(stringA) === cleanString(stringB)

    // bcca
    // cacb

    // abcc
    // abcc
}




function buildCharMap(str){

     const charMap = {}

     //     /     / < ------ to start a regex 
     //    /g <------ g flag for global
     //    [^\w] <----- character that is not a character, replace with an empty string
     const normalizedStr = str.replace(/[^\w]/g, '').toLowerCase()
     /// alice!!! ---> str.replace() ----> alice
        /// t!m H0rtOnzzz ---> str.replace() ----> tmhrtnzzz


     for(let char of normalizedStr){

        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }

     }

     return charMap
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

console.log(anagrams('baba!', 'ba! Ba'))


// str = baba!
// ---> replace() ---> [b,a,b,a,!]
// ---> \w (alphanumeric character) --> [a,b,a,!]
// ---> \w (alphanumeric character) --> [b,a,!]
// ---> \w (alphanumeric character) --> [a,!]
// ---> \w (alphanumeric character) --> [!]


// ----> ^\w (not an alphanumeric char) ----> [b,a,b,a,!] ----> [b]
// ----> ^\w (not an alphanumeric char) ----> [b,a,b,a,!] ----> [b,a]
// ----> ^\w (not an alphanumeric char) ----> [b,a,b,a,!] ----> [b,a,b]
// ----> ^\w (not an alphanumeric char) ----> [b,a,b,a,!] ----> [b,a,b,a]
// ----> ^\w (not an alphanumeric char) ----> [b,a,b,a,!] ----> [b,a,b,a] // exclamation mark was replaced with empty string

// ...result of replace is "baba"

// ... toLowerCase() .... result is "baba"

// ... split .... result is ['b','a', 'b', 'a']

// .... sort .... result is ['a', 'a', 'b','b']

// .... join .... result is 'aabb'

// result of cleanString for stringA = 'aabb'


// //stringB
// str = "ba! Ba"
// ---> replace() ---> [b,a,!, ,B,a]
// result of replace ... "baBa"
// .... toLowerCase() .... result is "baba"
// .... split() .... result is ['b','a','b','a']
// .... sort() ..... result is ['a','a','b','b']
// ..... join() ..... result is "aabb"
// result of cleanString for stringb = 'aabb'


// clearString(stringA) === clearString(stringB)
// 'aabb' === 'aabb'
// => true