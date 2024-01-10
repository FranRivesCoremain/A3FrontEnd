// GENERAL
import { useContext } from "react"
import PropTypes from "prop-types"

// COMPONENTS
import TableContext from '../../contexts/TableContext'

const CheckButton = (props) => {
  const {
    checkedColumnSelectors: { checkedColumnSelectors }, checkedColumnSelectors: { setCheckedColumnSelectors }, checkedRowSelectors: { checkedRowSelectors }, checkedRowSelectors: { setCheckedRowSelectors }
  } = useContext(TableContext);

  function handleOnClick() {
    if (props.className === "columnSelector") {
      let tempCheckedColumnSelectors = checkedColumnSelectors.slice();
      tempCheckedColumnSelectors[props.index] = !tempCheckedColumnSelectors[props.index];
      setCheckedColumnSelectors(tempCheckedColumnSelectors);
    }
    else if (props.className === "rowSelector") {
      let tempCheckedRowSelectors = checkedRowSelectors.slice();
      tempCheckedRowSelectors[props.index] = !tempCheckedRowSelectors[props.index];
      setCheckedRowSelectors(tempCheckedRowSelectors);
    }
  }
  
  return (
    <div className={`${props.className} ${props.className === "columnSelector" ? checkedColumnSelectors[props.index] ? "checked" : "unchecked" : checkedRowSelectors[props.index] ? "checked" : "unchecked"}`}
      onClick={() => handleOnClick()}>
      <div></div>
    </div>
  )
};

CheckButton.propTypes = {
  className: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default CheckButton;