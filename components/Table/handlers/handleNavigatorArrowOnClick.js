function handleNavigatorArrowOnClick(type, setCurrentPage, currentPage) {
  if (type === "left")
    setCurrentPage(currentPage - 1);
  else /*if (type === "right")*/
    setCurrentPage(currentPage + 1);
}

export default handleNavigatorArrowOnClick