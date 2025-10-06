// EXPLICIT CONVERSION

const x = 100;
const xString = x.toString();

console.log(xString);

const yString = "200.75";
const yInt = parseInt(yString);
const yFloat = parseFloat(yString);

console.log("yInt = " + yInt);
console.log("yFloat = " + yFloat);

// IMPLICIT CONVERSION
console.log(16 + "10");
console.log("10" + 16);

console.log(16 - "10");
console.log("10" - 2);

console.log(16 - "10a");

console.log("5" + - "2");
console.log("5" - - "2");