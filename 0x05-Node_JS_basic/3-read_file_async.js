const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      const students = data.split('\n');
      // remove headers
      students.shift();
      // remove empty lines at the end of the file
      let i = students.length - 1;
      while (students[i] === '') {
        students.pop();
        i -= 1;
      }
      console.log(`Number of students: ${students.length}`);

      const studentsByField = {};
      for (const s of students) {
        const studentData = s.split(',');
        const firstName = studentData[0];
        const field = studentData[3];
        if (field in studentsByField) {
          studentsByField[field].push(firstName);
        } else {
          studentsByField[field] = [firstName];
        }
      }

      for (const field in studentsByField) {
        if (field) {
          console.log(
            `Number of students in ${field}: ${
              studentsByField[field].length
            }. List: ${studentsByField[field].join(', ')}`,
          );
        }
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
