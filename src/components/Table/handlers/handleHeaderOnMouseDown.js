function handleHeaderOnMouseDown(i, isColumnResizable, setColumnWidthIndex) {
  if (isColumnResizable)
    setColumnWidthIndex(i);
}

export default handleHeaderOnMouseDown;