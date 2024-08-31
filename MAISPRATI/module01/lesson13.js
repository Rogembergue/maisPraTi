const prompt = require("prompt-sync")();

let professor = {
    name: "Tony Stark",
    subject: "Physics",
    grades: {
        student1: [10.0, 8.0], 
        student2: 8.0,
        student3: 7.0
    }
}

let sumGrades = 0
let numberOfStudents = 0

for(let student in professor.grades){
    sumGrades += professor.grades[student]
    numberOfStudents++
}


let average = sumGrades / numberOfStudents

console.log(`A nota média da turma é: ${average.toFixed(2)}`)
console.log(average >= 6 
    ? `${professor.name} está acima da média.`
