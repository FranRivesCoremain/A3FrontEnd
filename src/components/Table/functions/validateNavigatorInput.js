function validateNavigatorInput(tempPage, numberOfPages) {
  // If tempPage is -1, it means the user has inputted invalid characters (string instead of number). We don't have to do anything because the html input control is of type number and its dealt with in the component rendering logic.
  if (tempPage === -1)
    return { isValid: true, text: "" };
  if (tempPage >= numberOfPages)
    return { isValid: false, text: "Página fuera de rango" };
  else
    return { isValid: true, text: "" };
}

export default validateNavigatorInput