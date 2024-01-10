import navigatingLeftArrowFile from "../../../images/mainTable/navigatingLeftArrow.png"

function handleNavigatorArrowOnMouseOut(type, setNavigatingLeftArrow, setNavigatingRightArrow) {
  if (type === "left")
    setNavigatingLeftArrow(navigatingLeftArrowFile);
  else //if (type === "right")
    setNavigatingRightArrow(navigatingLeftArrowFile);
}

export default handleNavigatorArrowOnMouseOut