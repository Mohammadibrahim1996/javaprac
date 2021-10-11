//divisble by 3 => fizz 
// divisble by 5 => buzz 
// divisible by both => fizzbuzz 
//not divisble by 3 or 5 => input 
// not a number => Nan

// const output = fizzBuzz(3);

// function fizzBuzz(input) {
    
//     if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';
    
//     if (typeof input !== "number")
//     return NaN;
    
//     if (input % 3 === 0)
//     return 'Fizz';
    
//     if (input % 5 === 0 )
//     return 'Buzz';
    
//     return input;
// };

// console.log (output);

const output = fizzBuzz(3);

function fizzBuzz(input) {
    
    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';
    
    if (typeof input !== "number")
    return NaN;
    
    if (input % 3 === 0)
    return 'Fizz';
    
    if (input % 5 === 0 )
    return 'Buzz';
    
    return input;
};

console.log (output);