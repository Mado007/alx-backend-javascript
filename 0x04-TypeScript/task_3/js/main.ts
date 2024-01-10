/// <reference path="./crud.d.ts" />

import rowTypes from "./interface";
import * as CRUD from "./crud";

let row: rowTypes.RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
}

const newRowID: rowTypes.RowID = CRUD.insertRow(row);

const updatedRow: rowTypes.RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);

// Expected result:

// const obj = {firstName: "Guillaume", lastName: "Salva"};
// CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

// const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
// CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// CRUD.deleteRow(125);
// Delete row id 125
