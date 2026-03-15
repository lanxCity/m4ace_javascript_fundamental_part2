// Playing with console.log
const print = console.log;

// Assignment started
const startTable = 2;
const endTable = 10;

const startColumn = 1;
const endColumn = 15;

// Using for loop
console.log("Using for loop");
for (let i = startColumn; i <= endColumn; i++) {
  let newRow = "";
  for (let j = startTable; j <= endTable; j++) {
    newRow += `${j} * ${i} = ${j * i}`;
    newRow += "\t";
  }

  console.log(newRow);
}

print("\n");

// using while loop
console.log("Using while loop");

let columnCount = startColumn;
while (columnCount <= endColumn) {
  let newRow = "";

  let tableCount = startTable;
  while (tableCount <= endTable) {
    newRow += `${tableCount} * ${columnCount} = ${tableCount * columnCount}`;
    newRow += "\t";
    tableCount++;
  }
  console.log(newRow);
  columnCount++;
}
