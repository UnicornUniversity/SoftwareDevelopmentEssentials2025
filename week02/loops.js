for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 9; i >= 0; i--) {
    console.log(i);
}

// ++, +=

let x = 200;
console.log("x++ --> " + x++);
console.log("x after --> " + x);
let y = 200;
console.log("++y --> " + ++y);
console.log("y after --> " + y);

let z = 5;
z = z + 1;
console.log("z --> " + z);
z += 5;
console.log("z --> " + z);

// another way to use loops
console.log("---- for in loop ----");
const arr = [100, 200, 300];
for (let i in arr) {
    console.log(i);
}
