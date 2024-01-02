export default function createIteratorObject(report) {
  const emps = [];
  const departments = Object.keys(report.allEmployees);
  for (const dept of departments) {
    for (const emp of report.allEmployees[dept]) {
      emps.push(emp);
    }
  }
  return emps;
}
