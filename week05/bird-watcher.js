function getToday(birds) {
    return birds[birds.length - 1];
}

function incBirdInPlace(birds) {
    birds[birds.length - 1]++;
}

function incBirdOutPlace(birds) {
    const newArr = birds.slice(0, birds.length - 1);
    const lastItem = birds[birds.length - 1] + 1;
    newArr.push(lastItem);
    return newArr;
}

function daysWithoutBirds(birds) {
    for (let i = 0; i < birds.length; i++) {
        if (birds[i] === 0) return true;
    }
    return false;
}

function getNumberOfBusyDays(birds) {
    let num = 0;
    for (let i = 0; i < birds.length; i++) {
        if (birds[i] >= 5) num++;
    }
    return num;
}


const days = [0, 2, 5, 3, 7, 8, 4];

console.log(days);
console.log("getToday = " + getToday(days));
//incBirdInPlace(days);
//console.log("after incBird = " + getToday(days));
//console.log("array after incBird = " + days);

console.log("after incBirdOutPlace = " + incBirdOutPlace(days));
console.log("original vector = " + days);
console.log("daysWithoutBirds = " + daysWithoutBirds(days));
console.log("getNumberOfBusyDays = " + getNumberOfBusyDays(days));



