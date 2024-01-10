function handleHeaderOnMouseMove(columnWidthIndex, setHasMovedMouse, columnWidths, setColumnWidths) {
  if (columnWidthIndex !== -1) {
    setHasMovedMouse(true);
    const header = document.getElementsByClassName("mainTable")[0].getElementsByTagName("th")[columnWidthIndex].getElementsByTagName("div")[0];
    let tempColumnWidths = columnWidths.slice();
    tempColumnWidths[columnWidthIndex] = header.offsetWidth;
    setColumnWidths(tempColumnWidths);
  }
}

export default handleHeaderOnMouseMove;