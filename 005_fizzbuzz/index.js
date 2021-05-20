// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.

// fizzbuzz(5) ===> 1 2 fizz 4 buzz ..... 14 fizzbuzz

function fizzbuzz(n){
    for(let i = 1; i <= n; i++){
        //is the number a multiple of 3 and 5
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz")
        }else if(i % 3 === 0){
            console.log("fizz")
        }else if(i % 5 === 0){
            console.log("buzz")
        }else{
            console.log(i)
        }

        //BAD EXAMPLE
        // if(i % 3 === 0){
        //     console.log("fizz")
        // }else if(i % 5 === 0){
        //     console.log("buzz")
        // }else if(i % 3 === 0 && i % 5 === 0){
        //     console.log("fizzbuzz")
        // }else{
        //     console.log(i)
        // }
    }
}

fizzbuzz(20)