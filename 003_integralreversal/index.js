// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.

// 51 ====> func() ====> 15
// -51 =====> func() ====> -15
// -90 ====> func() ====> -9

function reverseInt(n){
    //convert int to string
    const reversed = n.toString().split('').reverse().join('') // 1 ==> toString() ==> '1'

    if(n < 0){
        // return parseInt(reversed) * -1
        return parseInt(reversed) * Math.sign(n)
    }

    return parseInt(reversed)
}

console.log(reverseInt(-500))