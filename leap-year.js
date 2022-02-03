function isLeapYear(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    return false;
}
const myYaer = 2023;
const theLeapYear = isLeapYear(myYaer);
console.log(theLeapYear);