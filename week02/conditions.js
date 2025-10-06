const x = "200";

if (x === 200) {
    console.log("x is 200");
} else {
    console.log("x is not 200");
}

if (parseInt(x) === 200) {
    console.log("x is 200");
} else {
    console.log("x is not 200");
}

if (x != 200) {
    console.log("x is not 200");
} else {
    console.log("x is 200");
}

// ternary operator
const y = (x == 200) ? console.log("x is 200") : console.log("x is not 200");