function handleFieldOnFocus(e, i, j, isEditable, clickedFieldIndexes, editedTableData, tableData, setEditedTableData, setClickedFieldIndexes) {
  if (isEditable) {
    e.stopPropagation(); // We don't want the event to bubble up because we have another onClick listener on the table element.
    if (clickedFieldIndexes[0] !== -1) {
      const keyName = Object.keys(editedTableData[clickedFieldIndexes[0]])[clickedFieldIndexes[1]];
      if (editedTableData[clickedFieldIndexes[0]][keyName].value !== tableData[clickedFieldIndexes[0]][keyName].value) {
        let tempEditedTableData = editedTableData.slice();
        tempEditedTableData[clickedFieldIndexes[0]][keyName].isEdited = true;
        setEditedTableData(tempEditedTableData);
      }
    }
    setClickedFieldIndexes([i, j]);
  }
}

export default handleFieldOnFocus;