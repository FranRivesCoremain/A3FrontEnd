// GENERAL
import { useContext } from "react"
import PropTypes from "prop-types"

// COMPONENTS
import TableContext from '../../contexts/TableContext'

// FUNCTIONS
import handleFieldOnFocus from "./handlers/handleFieldOnFocus"
import handleFieldOnChange from "./handlers/handleFieldOnChange"
import setInputFieldClass from "./functions/setInputFieldClass"
import handleFieldOnBlur from "./handlers/handleFieldOnBlur"

const Body = (props) => {
  const { clickedFieldIndexes: { clickedFieldIndexes }, clickedFieldIndexes: { setClickedFieldIndexes }, columnWidths: { columnWidths },
    tableData: { tableData }, editedTableData: { editedTableData }, editedTableData: { setEditedTableData }, isEditable, itemsPerPage, expandedIndex: { expandedIndex }, expandedIndex: { setExpandedIndex },
  } = useContext(TableContext);

  function handleTableRowOnClick(e, i) {
    if (e.target.tagName === "TD") {
      const newIndex = expandedIndex === i ? -1 : iok;
      setExpandedIndex(newIndex);
      e.stopPropagation();
    }
  }

  return (
    <tbody>
      {editedTableData.map((row, i) => (
        i >= (props.currentPage * itemsPerPage) && i < ((props.currentPage + 1) * itemsPerPage) ?
          <tr key={i} className={i % 2 === 0 ? "odd" : "even"}>
            {Object.values(row).map((obj, j) => ( // rest of row data.
              <td key={j} onClick={(e) => handleTableRowOnClick(e, i)}>
                {obj.isEditable &&
                  <input className={setInputFieldClass(obj, i, j, clickedFieldIndexes)} style={{ width: `${columnWidths[j]}px` }} type="text" value={obj.value} name={obj.value}
                    onFocus={(e) => handleFieldOnFocus(e, i, j, isEditable, clickedFieldIndexes, editedTableData, tableData, setEditedTableData, setClickedFieldIndexes)}
                    onBlur={() => handleFieldOnBlur(isEditable, clickedFieldIndexes, editedTableData, tableData, setEditedTableData, setClickedFieldIndexes)}
                    onChange={(e) => handleFieldOnChange(e.target.value, editedTableData, clickedFieldIndexes, setEditedTableData)} />
                }
                {!obj.isEditable &&
                  <div className={setInputFieldClass(obj, i, j, clickedFieldIndexes)} style={{ width: `${columnWidths[j]}px` }}>{obj.value}</div>
                }
              </td>
            ))}
          </tr>
          : null
      ))}
    </tbody>
  )
};

Body.propTypes = {
  currentPage: PropTypes.number.isRequired,
}

export default Body