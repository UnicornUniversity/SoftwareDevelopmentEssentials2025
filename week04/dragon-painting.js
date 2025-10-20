const dragonParts = [
    [2, 3],
    [5, 4],
    [1,3]];

function calcArea(a, b){
    return a * b;
}

// m2
let totalArea = 0;

for (let i = 0; i < dragonParts.length; i++) {
    const part = dragonParts[i];
    const width = part[0];
    const height = part[1];

    // totalArea += calcArea(dragonParts[i][0], dragonParts[i][1]);

    totalArea += calcArea(width, height);
}

// TODO read about so-called "magic numbers"
// https://en.wikipedia.org/wiki/Magic_number_(programming)
const CANS_PER_M2 = 2;
const numberCans = totalArea * CANS_PER_M2;

console.log("Number Cans: " + numberCans);


