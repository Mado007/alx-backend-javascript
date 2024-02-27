const fs = require('fs');
/**
 * Reads the data of students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 * @returns {Promise<{
 *   String: {firstname: String}[]
 * }>}
 */
const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
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
      resolve(studentsByField);
    }
  });
});

module.exports = readDatabase;
