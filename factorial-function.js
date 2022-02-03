// let factorial = 1;
// for(i = 1; i<= 9; i++){
//     factorial = factorial * i;
// }

function factorial(number){
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}
var theFactorial = 8;
var finalFactorial = factorial(theFactorial);
console.log(finalFactorial);


var theFinalfac = factorial(9);
console.log(theFinalfac);