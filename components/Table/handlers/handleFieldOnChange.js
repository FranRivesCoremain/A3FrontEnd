function handleFieldOnChange(newValue, editedTableData, clickedFieldIndexes, setEditedTableData) {
  let tempTableData = [];
  editedTableData.forEach(row => {
    let rowCopy = JSON.parse(JSON.stringify(row, null, 2));
    tempTableData.push(rowCopy);
  });
  const keyName = Object.keys(tempTableData[clickedFieldIndexes[0]])[clickedFieldIndexes[1]];
  tempTableData[clickedFieldIndexes[0]][keyName].value = newValue;
  setEditedTableData(tempTableData);
}

export default handleFieldOnChange;