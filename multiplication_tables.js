const startTable = 2;
const endTable = 10;

const startColumn = 1;
const endColumn = 15;

for (let i = startColumn; i <= endColumn; i++) {
  let newRow = "";
  for (let j = startTable; j <= endTable; j++) {
    newRow += `${j} * ${i} = ${j * i}`;
    newRow += "\t";
  }

  console.log(newRow);
}
