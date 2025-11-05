const arr = [6, 4, 100, 71];



// WITHOUT HIGH-ORDER FUNCTION
function incItem(n){
    return n + 1;
}

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(incItem(arr[i]));
}
console.log(newArr);

//-------------- MAP -----------------------

// MAP with non-anonymous function (incItem)
const newArrMap = arr.map(item => incItem(item));
console.log(newArrMap);

// MAP with anonymous function
console.log(arr.map((n) => {
    const newItem = n + 1;
    console.log(`${n} >> ${newItem}`);
    return newItem;
}));

// MAP with the single statement
console.log(arr.map((n) => n + 1));

//-------------- FOREACH -----------------------
arr.forEach((n) => console.log(n));

//-------------- REDUCE -----------------------
console.log("min = " + arr.reduce((currentMinValue, currentValue) => currentMinValue < currentValue ? currentMinValue : currentValue));

//-------------- FILTER -----------------------
function isEven(n){
    return n % 2 === 0;
}

const arrFiltered = arr.filter((n) => isEven(n));
console.log("only even numbers = " + arrFiltered);







