function getToday(birds) {
    return birds[birds.length - 1];
}

function incBirdOutPlace(birds) {
    const newArr = birds.slice(0, birds.length - 1);
    const lastItem = birds[birds.length - 1] + 1;
    newArr.push(lastItem);
    return newArr;
}

function daysWithoutBirds(days) {
    // option 1
    // return days.filter((day) => day === 0).length > 0;
    return days.some((day) => day === 0);
}

function getNumberOfBusyDaysFilter(days) {
    return days.filter((day) => day >= 5).length;
}

function getNumberOfBusyDaysReduce(days) {
    return days.reduce((numberOfBusyDays, day) => day >= 5 ? numberOfBusyDays + 1 : numberOfBusyDays);
}

function getNDaysCount(days, numberOfDays){
    return days.reduce((total, day, index) => index < numberOfDays ? total + day : total);
}

function getAverageCount(days){
    const totalNumberOfBirds = days.reduce((total, day) => day > 0 ? total + day : total);
    const daysBirdsVisited = days.length - daysWithoutBirds(days);
    return totalNumberOfBirds / daysBirdsVisited;
}

// 29 / 6
const days = [0, 2, 5, 3, 7, 8, 4];

console.log(days);
console.log("getToday = " + getToday(days));
//incBirdInPlace(days);
//console.log("after incBird = " + getToday(days));
//console.log("array after incBird = " + days);

console.log("after incBirdOutPlace = " + incBirdOutPlace(days));
console.log("original vector = " + days);
console.log("daysWithoutBirds = " + daysWithoutBirds(days));
console.log("getNumberOfBusyDaysFilter = " + getNumberOfBusyDaysFilter(days));
console.log("getNumberOfBusyDaysReduce = " + getNumberOfBusyDaysReduce(days));
console.log("getNDaysCount = " + getNDaysCount(days, 4));
console.log("getAverageCount = " + getAverageCount(days));
