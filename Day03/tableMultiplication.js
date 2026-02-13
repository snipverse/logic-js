function printMultiplicationTable (tableOf, tableTill) {
  console.log(tableOf, tableTill);
  for (let i = 1; i <= tableTill; i++) {
    console.log(`${tableOf} * ${i} = ${i * tableOf}`);
  }
}
printMultiplicationTable(5, 10);
printMultiplicationTable(10, 10);

function printMultiplicationTable2 (tableOf, tableTill) {
  for (let i = tableOf; i <= tableOf * tableTill; i = i + tableOf) {
    console.log(i);
  }
}
printMultiplicationTable2(2,20);