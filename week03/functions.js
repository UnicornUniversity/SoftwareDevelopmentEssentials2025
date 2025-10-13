// pure function: depends on its args only

function sayHello(personName) {
    return "Hello, " + personName + "!";
}

// this is not a pure function; this is a function with side effect
function sayGoodbye(personName) {
    console.log("Goodbye, " + personName + "!");
}

console.log(sayHello("John"));
console.log(sayHello("Mary"));

// prints nothing, just returns string
sayHello("John");
sayGoodbye("Mary");

// true, false
function canSellAlcohol(yob) {
    const age = 2025 - yob;
    console.log(age);
    return age >= 18;
}

console.log(canSellAlcohol(2013));
console.log(canSellAlcohol(2000));

console.log(canSellAlcohol("Mary"));
console.log(canSellAlcohol("2000"));