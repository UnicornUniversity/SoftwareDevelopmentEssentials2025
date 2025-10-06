// collection, list, array, set
const c = [10, 50, -1, 11];

// wrong indexes
for (let i = 1; i <= 4; i++) {
    // c[i], i is index of element
    console.log("[" + i + "] -- > " + c[i]);
}

console.log("----------------");

for (let i = 0; i < 4; i++) {
    // c[i], i is index of element
    console.log("[" + i + "] -- > " + c[i]);
}

const anotherCollection = [10, 50, -1, 11, 56, 3];
for (let i = 0; i < anotherCollection.length; i++) {
    // c[i], i is index of element
    console.log("[" + i + "] -- > " + anotherCollection[i]);
}

// ... <- yes, this is operator as well
const arr1 = [1, 2, 3];
console.log(arr1);
const arr2 = [5, ...arr1, 6];
console.log(arr2);