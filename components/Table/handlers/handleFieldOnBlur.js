function handleFieldOnBlur(isEditable, clickedFieldIndexes, editedTableData, tableData, setEditedTableData, setClickedFieldIndexes) {
  if (isEditable) {
    if (clickedFieldIndexes[0] !== -1) {
      const keyName = Object.keys(editedTableData[clickedFieldIndexes[0]])[clickedFieldIndexes[1]];
      if (editedTableData[clickedFieldIndexes[0]][keyName].value !== tableData[clickedFieldIndexes[0]][keyName].value) {
        let tempEditedTableData = editedTableData.slice();
        tempEditedTableData[clickedFieldIndexes[0]][keyName].isEdited = true;
        setEditedTableData(tempEditedTableData);
      }
    }
    setClickedFieldIndexes([-1, -1]);
  }
}

export default handleFieldOnBlur;