
// key-pair values
const student1 = {
    // fields or properties
    "name" : "John",
    "surname" : "Smith",
    "age" : 30,
    // nested JSON
    "address" : {
        "street" : "Kolbenova",
        "city" : "Prague",
    }
};

// console.log(student1);

// property access via "dot-notation"
console.log(student1.name);
console.log(student1.age);
// this property doesn't exist = undefined
console.log(student1.age111);
console.log(student1.address.street);

student1.address.street = "Manesova";
console.log(student1.address.street);

// property access via property names
console.log(student1["name"]);
console.log(student1["age"]);
console.log(student1["address"]["street"]);
// error
//console.log(student1["address1"]["street1"]);

const student2 = {"name" : "Mary"};

const students = [student1];
students.push(student2);

for (const student of students) {
    console.log(student.name);
    console.log(student.age);
}


