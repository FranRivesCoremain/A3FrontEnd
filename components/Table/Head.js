// GENERAL
import { useState, useContext } from "react"
import PropTypes from "prop-types"

// COMPONENTS
import TableContext from '../../contexts/TableContext'
import CheckButton from "../InputControls/CheckButton"

// FUNCTIONS
import handleHeaderOnMouseDown from "./handlers/handleHeaderOnMouseDown"
import handleHeaderOnMouseMove from "./handlers/handleHeaderOnMouseMove"
import handleHeaderOnMouseUp from "./handlers/handleHeaderOnMouseUp"

const Head = (props) => {
  const {
    columnWidths: { columnWidths }, columnWidths: { setColumnWidths }, columnWidthIndex: { columnWidthIndex }, columnWidthIndex: { setColumnWidthIndex },
    isColumnResizable, isSortable, editedTableData: { editedTableData }, editedTableData: { setEditedTableData }, isColumnSelectable,
  } = useContext(TableContext);
  const [hasMovedMouse, setHasMovedMouse] = useState(false);

  return (
    <thead>
      <tr>
        {props.headerNames.map((name, i) => (
          <th key={i}>
            <div className={`${props.className} ${props.sortingObject.sortingCriterion === name ? props.sortingObject.sortingType : ""}`}
              onMouseDown={() => handleHeaderOnMouseDown(i, isColumnResizable, setColumnWidthIndex)} onMouseMove={() => handleHeaderOnMouseMove(columnWidthIndex, setHasMovedMouse, columnWidths, setColumnWidths)}
              onMouseUp={() => handleHeaderOnMouseUp(i, isColumnResizable, setColumnWidthIndex, hasMovedMouse, isSortable, props.sortingObject, props.headerNames, props.setSortingObject, editedTableData, setEditedTableData, setHasMovedMouse)}>{name}
            </div>
            {isColumnSelectable &&
              <CheckButton className="columnSelector" index={i} />
            }
          </th>
        ))}
      </tr>
    </thead>
  )
};

Head.propTypes = {
  className: PropTypes.string.isRequired,
  headerNames: PropTypes.array.isRequired,
  sortingObject: PropTypes.object.isRequired,
  setSortingObject: PropTypes.func.isRequired,
}

export default Head