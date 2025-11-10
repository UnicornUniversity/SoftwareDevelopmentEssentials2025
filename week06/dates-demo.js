const dtNow = Date.now();
console.log(dtNow);

// JS specific!
// January = 0
// December = 11
const dt = new Date(2025, 5, 10);
console.log("specific date is " + dt.toString());
console.log("year is " + dt.getFullYear());
console.log("month (index!) is " + dt.getMonth());

// day of the week
// Sunday =  0, M = 1, T = 2, W = 3
console.log("day of the week is " + dt.getDay());

// day of the month
console.log("day of the month is " + dt.getDate());

const dtStr1 = new Date("2024-11-13");
console.log("dtStr1 is " + dtStr1);

// incorrect date!
const dtStr2 = new Date("2024-15-13");
console.log("dtStr2 is " + dtStr2);

const dt2 = new Date(2025, 15, 10);
console.log("dt2 is " + dt2.toString());

// ISO
console.log("dt ISO is " + dt.toISOString());

// student + ISO
const student = {"name" : "Mary", "birthday" : dt.toISOString()};
console.log(student);


