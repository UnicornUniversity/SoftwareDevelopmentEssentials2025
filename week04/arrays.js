const arrCities = [];
arrCities.push("Prague");
arrCities.push("Berlin", "Vienna");
console.log(arrCities);
console.log(arrCities.length); // size()

// get index. 0-based, starts with 0
console.log(arrCities[1]);
console.log(arrCities[4]); // undefined // index out of bound
console.log(arrCities["1"]); // implicit conversion "1" > 1
console.log(arrCities["01"]);

arrCities["01"] = "Madrid";
arrCities["x01"] = "Barcelona";
console.log(arrCities["01"]);
console.log(arrCities["x01"]);
console.log(arrCities);
console.log(arrCities.x01);

console.log("---- keys ----");
console.log(Object.keys(arrCities));

console.log("---- pop ----");
console.log(arrCities.pop());
console.log(arrCities);

delete arrCities["01"];
delete arrCities["x01"];
console.log(arrCities);

// reverse VS toReversed
arrCities.reverse();
console.log(arrCities);
arrCities.reverse();
console.log(arrCities);

console.log(arrCities.toReversed());
console.log(arrCities);




