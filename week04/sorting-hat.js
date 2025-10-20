function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// let's design it as a pure function
function getFacultyName() {

    const faculties = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
    const rnd = getRandomInt(100);

    let facultyIndex = -1;
    if ((0 <= rnd) && (rnd < 25)) {
        facultyIndex = 0;
    } else if ((25 <= rnd) && (rnd < 50)) {
        facultyIndex = 1;
    } else if ((50 <= rnd) && (rnd < 75)) {
        facultyIndex = 2;
    } else if ((75 <= rnd) && (rnd < 100)) {
        facultyIndex = 3;
    }

    return faculties[facultyIndex];
}

const students = ["Harry Potter", "Ron Weasley", "Hermione Granger"];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student + " goes to " + getFacultyName());
}