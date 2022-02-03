function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const myFactorial = getFactorial(6);
console.log(myFactorial);

function GetNewFactorial(number){
    let fact = 1;
    let i = number;
    while(i >= 1){
        fact = fact * i;
        i--;
    }
    return fact;
}
const newFactorial = GetNewFactorial(5);
console.log(newFactorial);