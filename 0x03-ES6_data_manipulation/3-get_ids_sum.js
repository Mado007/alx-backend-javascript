// This function returns the sum of all the student ids.
export default function getStudentIdsSum(listStudents) {
  if (!Array.isArray(listStudents)) {
    return 0;
  }

  return listStudents.reduce((sum, student) => sum + student.id, 0);
}
