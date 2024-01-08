// this function returns an array of students who are located in a specific city.
export default function getStudentsByLocation(listStudents, city) {
  if (!Array.isArray(listStudents)) {
    return [];
  }

  return listStudents.filter((student) => student.location === city);
}
