// This function returns an array of students for a specific city with their new grade
export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter((student) => student.location === city).map((student) => {
    let grade = 'N/A';
    for (const g of newGrades) {
      if (student.id === g.studentId) {
        grade = g.grade;
      }
    }
    return { ...student, grade };
  });
}
