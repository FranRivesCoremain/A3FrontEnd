import navigatingLeftArrowHoverFile from "../../../images/mainTable/navigatingLeftArrowHover.png"

function handleNavigatorArrowOnMouseOver(type, setNavigatingLeftArrow, setNavigatingRightArrow) {
  if (type === "left")
    setNavigatingLeftArrow(navigatingLeftArrowHoverFile);
  else //if (type === "right")
    setNavigatingRightArrow(navigatingLeftArrowHoverFile);
}

export default handleNavigatorArrowOnMouseOver