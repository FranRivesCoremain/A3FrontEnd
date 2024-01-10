// GENERAL
import { useState, useContext } from "react"
import PropTypes from "prop-types"
import { useSpring, animated } from '@react-spring/web'

// COMPONENTS
import TableContext from "../../contexts/TableContext"

// FUNCTIONS
import handleNavigatorArrowOnMouseOver from "./handlers/handleNavigatorArrowOnMouseOver"
import handleNavigatorArrowOnMouseOut from "./handlers/handleNavigatorArrowOnMouseOut"
import handleNavigatorArrowOnClick from "./handlers/handleNavigatorArrowOnClick"
import handleNavigatorOnChange from "./handlers/handleNavigatorOnChange"
import handleNavigatorOnBlur from "./handlers/handleNavigatorOnBlur"
import handleNavigatorOnKeyDown from "./handlers/handleNavigatorOnKeyDown"

// ASSETS
import navigatingLeftArrowFile from "../../images/mainTable/navigatingLeftArrow.png"

const Navigator = (props) => {
  const { editedTableData: { editedTableData }, itemsPerPage } = useContext(TableContext);
  const [navigatingLeftArrow, setNavigatingLeftArrow] = useState(navigatingLeftArrowFile);
  const [navigatingRightArrow, setNavigatingRightArrow] = useState(navigatingLeftArrowFile);
  const [isChanging, setIsChanging] = useState(false);
  const [tempPage, setTempPage] = useState(props.currentPage);
  const numberOfPages = Math.ceil(editedTableData.length / itemsPerPage);
  const [errorObject, setErrorObject] = useState({ isValid: true, text: "" });
  // default config options for the animation: { tension: 170, friction: 26 }
  const [springs, api] = useSpring(() => ({
    from: { scale: 0, opacity: 1, x: -20, },
  }));

  return (
    <div className={props.className}>
      <img src={navigatingLeftArrow} alt="navigatingLeftArrow" style={props.currentPage > 0 ? { visibility: "visible" } : { visibility: "hidden" }}
        onMouseOver={() => handleNavigatorArrowOnMouseOver("left", setNavigatingLeftArrow, setNavigatingRightArrow)}
        onMouseOut={() => handleNavigatorArrowOnMouseOut("left", setNavigatingLeftArrow, setNavigatingRightArrow)}
        onClick={() => handleNavigatorArrowOnClick("left", props.setCurrentPage, props.currentPage)} />
      <div>
        <span>Página</span>
        <input type="number" value={isChanging && tempPage !== -1 ? tempPage + 1 : props.currentPage + 1}
          onChange={(e) => handleNavigatorOnChange(e.target.value, setIsChanging, setTempPage)}
          onBlur={() => handleNavigatorOnBlur(setIsChanging, tempPage, numberOfPages, setErrorObject, api, props.setCurrentPage)}
          onKeyDown={(e) => handleNavigatorOnKeyDown(e)} />
        <span>de {numberOfPages}</span>
        <animated.div className="errorMessage" style={springs}>{errorObject.text}</animated.div>
      </div>
      <img src={navigatingRightArrow} alt="navigatingRightArrow" style={props.currentPage < numberOfPages - 1 ? { visibility: "visible" } : { visibility: "hidden" }}
        onMouseOver={() => handleNavigatorArrowOnMouseOver("right", setNavigatingLeftArrow, setNavigatingRightArrow)}
        onMouseOut={() => handleNavigatorArrowOnMouseOut("right", setNavigatingLeftArrow, setNavigatingRightArrow)}
        onClick={() => handleNavigatorArrowOnClick("right", props.setCurrentPage, props.currentPage)} />
    </div>
  )
};

Navigator.propTypes = {
  className: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}

export default Navigator