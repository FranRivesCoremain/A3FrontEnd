import sort from "../../../functions/sort";

function handleHeaderOnMouseUp(i, isColumnResizable, setColumnWidthIndex, hasMovedMouse, isSortable, sortingObject, headerNames, setSortingObject, editedTableData, setEditedTableData, setHasMovedMouse) {
  if (isColumnResizable)
    setColumnWidthIndex(-1);
  if (!hasMovedMouse && isSortable) {
    let tempSortingObject = JSON.parse(JSON.stringify(sortingObject, null, 2)); // we clone the original sorting object.
    // If a header with sorting criterion has been clicked again.
    if (tempSortingObject.sortingCriterion === headerNames[i])
      tempSortingObject.sortingType = tempSortingObject.sortingType === "none" ? "ascending" : tempSortingObject.sortingType === "ascending" ? "descending" : "none";
    // If a header without sorting criterion has been clicked.
    else {
      tempSortingObject.sortingCriterion = headerNames[i];
      tempSortingObject.sortingType = "ascending";
    }
    if (tempSortingObject.sortingType === "none") { // when there's no sorting type set, we revert to the hidden id field.
      tempSortingObject.sortingCriterion = headerNames[0];
      tempSortingObject.sortingType = "ascending";
    }
    setSortingObject(tempSortingObject);
    setEditedTableData(sort(editedTableData, tempSortingObject));
  }
  setHasMovedMouse(false);
}

export default handleHeaderOnMouseUp;