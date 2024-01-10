import rowTypes from "./interface";

export function insertRow(row: rowTypes.RowElement): rowTypes.RowID;

export function deleteRow(rowId: rowTypes.RowID): void;

export function updateRow(rowId: rowTypes.RowID, row: rowTypes.RowElement): rowTypes.RowID;

