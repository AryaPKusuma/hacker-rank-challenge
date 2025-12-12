function gradingStudents(grades) {
    const grading = grades.map((num => 
        num%5 < 3 || num < 38 ? num : num = Math.ceil(num/5)*5    
    ))
    // const passed = 40

    // const filteredGrade = grading.filter(num => num >= passed)

    return grading
}


const grades= [4, 73, 67, 38, 33]

let num = 72;
// console.log(Math.ceil(num / 5)*5)

console.log(gradingStudents(grades))