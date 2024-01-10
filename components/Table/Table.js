/** @jsxImportSource @emotion/react */

// GENERAL
import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import GeneralContext from '../../contexts/GeneralContext'
import TableContext from '../../contexts/TableContext'
import Head from './Head'
import Body from './Body'
import Navigator from './Navigator'
import RowSelectors from './RowSelectors'

// FUNCTIONS
import getTableHeaderNames from './functions/getTableHeaderNames'
import handleTableOnKeyDown from './handlers/handleTableOnKeyDown'
import MainExpandedData from '../MainExpandedData'

const Table = (props) => {
  const { tableData: { tableData }, tableData: { setTableData } } = useContext(GeneralContext);
  const [editedTableData, setEditedTableData] = useState(tableData.slice()); // We create a shallow copy of tableData for live editing.
  const headerNames = getTableHeaderNames(tableData[0]);
  const [columnWidthIndex, setColumnWidthIndex] = useState(-1);
  const [columnWidths, setColumnWidths] = useState(Array(Object.keys(tableData[0]).length - 1).fill(110)); // we are not counting the id column.
  const [clickedFieldIndexes, setClickedFieldIndexes] = useState([-1, -1]);
  const [areValuesEdited, setAreValuesEdited] = useState(Array.from({ length: tableData.length }, e => Array(Object.keys(tableData[0]).length).fill(false)));
  const [sortingObject, setSortingObject] = useState({ sortingCriterion: "id", sortingType: "ascending" });
  const [checkedColumnSelectors, setCheckedColumnSelectors] = useState(Array(Object.keys(tableData[0]).length).fill(false));
  const [checkedRowSelectors, setCheckedRowSelectors] = useState(Array(tableData.length).fill(false));
  const [currentPage, setCurrentPage] = useState(0); // index based (beginning at 0).
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <TableContext.Provider value={{
      columnWidths: { columnWidths, setColumnWidths }, columnWidthIndex: { columnWidthIndex, setColumnWidthIndex }, isColumnResizable: props.isColumnResizable, clickedFieldIndexes: { clickedFieldIndexes, setClickedFieldIndexes },
      areValuesEdited: { areValuesEdited, setAreValuesEdited }, tableData: { tableData, setTableData }, editedTableData: { editedTableData, setEditedTableData }, isEditable: props.isEditable, isSortable: props.isSortable,
      isColumnSelectable: props.isColumnSelectable, checkedColumnSelectors: { checkedColumnSelectors, setCheckedColumnSelectors }, isRowSelectable: props.isRowSelectable, checkedRowSelectors: { checkedRowSelectors, setCheckedRowSelectors },
      itemsPerPage: props.itemsPerPage, expandedIndex: { expandedIndex, setExpandedIndex }
    }}>
      <div className={props.className + "Wrapper"} css={props.style}>
        {props.isRowSelectable &&
          <RowSelectors className="rowSelectors" currentPage={currentPage} />
        }
        <div className={props.className} onKeyDown={(e) => handleTableOnKeyDown(e, props.isEditable, clickedFieldIndexes, editedTableData, tableData, setEditedTableData, setClickedFieldIndexes)}>
          <table>
            <Head className={props.isColumnResizable ? "resizable" : ""} headerNames={headerNames} sortingObject={sortingObject} setSortingObject={setSortingObject} />
            <Body currentPage={currentPage} />
          </table>
          {props.isExpandable && props.className === "mainTable" &&
            <MainExpandedData expandedIndex={expandedIndex} />
          }
        </div>
        <Navigator className="navigator" currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </TableContext.Provider>
  );
};

Table.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  isColumnResizable: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool.isRequired,
  isSortable: PropTypes.bool.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  isColumnSelectable: PropTypes.bool.isRequired,
  isRowSelectable: PropTypes.bool.isRequired,
}

export default Table