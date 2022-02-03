function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 1452;
const isMyNumberEven = isEven(myNumber);
console.log(isMyNumberEven);


function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}
const newNumber = 130;
const isMyNumberOdd = isOdd(newNumber);
console.log(isMyNumberOdd);
