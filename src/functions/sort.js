function sort(originalData, sortingObject) {
  let sortedData = originalData.slice(); // we clone the original array.
  const factor = sortingObject.sortingType === "ascending" ? 1 : -1;

  sortedData.sort((a, b) => {
    if (typeof a[sortingObject.sortingCriterion].value === "string")
      return (a[sortingObject.sortingCriterion].value.localeCompare(b[sortingObject.sortingCriterion].value)) * factor; // two compare two strings alphabetically.
    else //if (typeof a[sortingObject.sortingCriterion].value === "number")
      return (a[sortingObject.sortingCriterion].value - b[sortingObject.sortingCriterion].value) * factor;
  });

  return sortedData;
}

export default sort;