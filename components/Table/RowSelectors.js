// GENERAL
import { useContext } from "react"
import PropTypes from "prop-types"

// COMPONENTS
import TableContext from '../../contexts/TableContext'
import CheckButton from "../InputControls/CheckButton";

const RowSelectors = (props) => {
  const { editedTableData: { editedTableData }, itemsPerPage } = useContext(TableContext);

  return (
    <div className={props.className}>
      {editedTableData.map((row, i) => (
        i >= (props.currentPage * itemsPerPage) && i < ((props.currentPage + 1) * itemsPerPage) ?
          <div key={i}>
            <CheckButton className="rowSelector" index={i} />
          </div>
          : null
      ))}
    </div>
  )
};

RowSelectors.propTypes = {
  className: PropTypes.string.isRequired,
}

export default RowSelectors;