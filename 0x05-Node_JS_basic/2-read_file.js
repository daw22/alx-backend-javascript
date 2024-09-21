const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split('\n');
    console.log(`Number of students: ${lines.length - 2}`);
    const fields = {};
    for (let i = 1; i < lines.length; i += 1) {
      if (!(lines[i].length === 0)) {
        const rows = lines[i].split(',');
        if (fields[rows[3]]) {
          fields[rows[3]].push(rows[0]);
        } else {
          fields[rows[3]] = [rows[0]];
        }
      }
    }
    for (const key in fields) {
      if (key) {
        console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
