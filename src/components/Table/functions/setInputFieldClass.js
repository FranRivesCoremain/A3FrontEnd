function setInputFieldClass(obj, i, j, clickedFieldIndexes) {
  if (obj.isEditable && clickedFieldIndexes[0] === i && clickedFieldIndexes[1] === j)
    return "editing";
  else if (obj.isEdited)
    return "edited";
  else
    return "";
}

export default setInputFieldClass;