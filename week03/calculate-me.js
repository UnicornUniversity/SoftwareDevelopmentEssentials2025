function sum(x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function multy(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function calculateEquation(x, y) {
    const xyMulty = multy(x, y);
    const part1 = minus(sum(x, y), xyMulty);
    const part2 = sum(minus(x, y), xyMulty);
    return divide(part1, part2);
}

console.log(calculateEquation(50, 10));