interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
// create students
const studentOne: Student = {firstName: "jhon", lastName: "doe", age: 20, location: "Texas"};
const studentTwo: Student = {firstName: "oliver", lastName: "skipp", age: 20, location: "Texas"};
// create students array
const students: Student[] = [studentOne, studentTwo];
// create the table
const table = document.createElement('table');
students.forEach((student) => {
  const tRow = document.createElement('tr');
  const tCellName = document.createElement('td');
  tCellName.textContent = student.firstName;
  tRow.appendChild(tCellName);
  const tCellLocation = document.createElement('td');
  tCellLocation.textContent = student.location;
  tRow.appendChild(tCellLocation);
  table.appendChild(tRow);
})
// adding the table to the dom
document.body.appendChild(table);