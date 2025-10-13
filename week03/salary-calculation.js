const HOUR_RATE = 1000; // CZK
const WEEKS_PER_YEAR = 52;
const HOURS_PER_DAY = 8;
const DAYS_PER_WEEK = 5;
const TAX_RATE = 0.15; // 15%

const hoursPerWeek = HOURS_PER_DAY * DAYS_PER_WEEK;
const hoursPerYear = hoursPerWeek * WEEKS_PER_YEAR;
const grossAmountPerYear = hoursPerYear * HOUR_RATE;

// this is strings concatenation
console.log("gross amount per year = " + grossAmountPerYear + "CZK");
const taxToBePaid = grossAmountPerYear * TAX_RATE;
console.log("tax to be paid = " + taxToBePaid + "CZK");

const netAmountPerYear = grossAmountPerYear - taxToBePaid;
const netAmountPerMonth = netAmountPerYear / 12;

console.log("net amount per month = " + netAmountPerMonth + "CZK");

