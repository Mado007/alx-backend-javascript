interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const studentsList: Student[] = [
  {firstName: "Ammar", lastName: "Khaled", age: 21, location: "Zagazig"},
  {firstName: "Mohammed", lastName: "Khaled", age :23, location: "Zagazig"}
];

const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);

const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const th0: HTMLTableHeaderCellElement = row.insertCell(0);
const th1: HTMLTableHeaderCellElement = row.insertCell(1);
th0.innerHTML = ("<b> First Name <b\>");
th1.innerHTML = ("<b> Location <b\>");

const body: HTMLTableSectionElement = table.createTBody();

studentsList.map((student) => {
  const row: HTMLTableRowElement = body.insertRow();
  const tr0: HTMLTableCellElement = row.insertCell(0);
  const tr1: HTMLTableCellElement = row.insertCell(1);
  tr0.innerHTML = student.firstName;
  tr1.innerHTML = student.location;
});
