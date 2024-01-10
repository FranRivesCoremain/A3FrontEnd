function handleTableOnKeyDown(e, isEditable, clickedFieldIndexes, editedTableData, tableData, setEditedTableData, setClickedFieldIndexes) {
  if (isEditable && clickedFieldIndexes[0] !== -1) {
    if (e.key === "Enter") {
      const keyName = Object.keys(editedTableData[clickedFieldIndexes[0]])[clickedFieldIndexes[1]];
      let tempEditedTableData = editedTableData.slice();
      if (editedTableData[clickedFieldIndexes[0]][keyName].value !== tableData[clickedFieldIndexes[0]][keyName].value) {
        tempEditedTableData[clickedFieldIndexes[0]][keyName].isEdited = true;
        setEditedTableData(tempEditedTableData);
        e.target.blur();
        setClickedFieldIndexes([-1, -1]);
      }
      else {
        e.target.blur();
        setClickedFieldIndexes([-1, -1]);
      }
    }
    else if (e.key === "Escape") {
      const keyName = Object.keys(editedTableData[clickedFieldIndexes[0]])[clickedFieldIndexes[1]];
      let tempEditedTableData = editedTableData.slice();
      tempEditedTableData[clickedFieldIndexes[0]][keyName].value = tableData[clickedFieldIndexes[0]][keyName].value;
      setEditedTableData(tempEditedTableData);
      e.target.blur();
      setClickedFieldIndexes([-1, -1]);
    }
  }
}

export default handleTableOnKeyDown;