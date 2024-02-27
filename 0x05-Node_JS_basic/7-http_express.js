const express = require('express');
const fs = require('fs');

const app = express();

const port = 1245;

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
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

      const payload = [`Number of students: ${students.length}`];

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
          payload.push(
            `Number of students in ${field}: ${
              studentsByField[field].length
            }. List: ${studentsByField[field].join(', ')}`,
          );
        }
      }
      resolve(payload);
    }
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const message = 'This is the list of our students\n';
  countStudents(process.argv[2])
    .then((payload) => {
      res.send(message + payload.join('\n'));
    })
    .catch((err) => {
      res.send(message + err.message);
    });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
