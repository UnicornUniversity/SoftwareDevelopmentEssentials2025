const ages = [36, 25, 2, 50];

// indexes = 0, 1, 2, 3; length = 4
for (let i = 0; i < ages.length; i++) {
    const age = ages[i];
    if (age % 25 === 0) {
        console.log("age is " + age);
    }
}