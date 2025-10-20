const s1 = "We are in Prague";

// just for illustration
const s2 = new String("We are in Prague");

// string works as array

console.log(s1.length);
// 0-based
console.log(s1[4]);

const s3 = "    Hello World     ";
console.log(s3);
console.log(s3.trimStart());
console.log(s3.trimEnd());
console.log(s3.trim());

const s4 = "Berlin";
const s5 = "BERLIN";

console.log(s4 === s5);
console.log(s4.toLowerCase() === s5.toLowerCase());




