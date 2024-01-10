// GENERAL
import { css } from '@emotion/react'

// COMPONENTS
import Table from './Table/Table'

// ASSETS
import sortingDownArrow from '../images/mainTable/sortingDownArrow.png'
import sortingUpArrow from '../images/mainTable/sortingUpArrow.png'

const MainTable = () => {
  const style = css`
    position: relative;
    width: 95%;
    left: 2.5%;
    overflow: hidden;
    padding-bottom: 50px;
    & div.rowSelectors {
      position: absolute;
      top: 27px;
      width: 47px;
      height: 838px;
      &>div {
        position: relative;
        height: 42px;
        width: 100%;
        margin-top: 7px;
        &>div.rowSelector {
          position: absolute;
          width: 14px;
          height: 14px;
          background-color: var(--coldNeutralColor7);
          padding: 0;
          top: 14px;
          left: 1px;
          cursor: pointer;
          &:hover {
            outline: var(--infoColor1) solid 1px;
          }
          &.checked>div {
            position: absolute;
            width: 6px;
            height: 6px;
            background-color: var(--coldNeutralColor22);
            top: 4px;
            left: 4px;
          }
        }
      }
    }
    & div.mainTable {
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    left: 48px;
    width: calc(100% - 48px);
    font-family: var(--sansSerifFont);
    color: var(--coldNeutralColor22);
    font-size: 16px;
    & table {
      display: inline-block;
      border-spacing: 0 7px;
    }
    & table>thead>tr>th {
      position: relative;
      font-weight: 100;
      padding: 0;
      &:nth-of-type(1) {
        display: none;
      }
    }
    & table>thead>tr>th>div {
      background-color: var(--coldNeutralColor7);
      margin-right: 25px;
      overflow: hidden;
      width: 110px;
      height: 20px;
      cursor: pointer;
      &.resizable {
        resize: horizontal;
      }
      &.descending, &.ascending {
        background-image: url(${sortingDownArrow});
        background-repeat: no-repeat;
        background-position: right 10px top 5px;
      }
      &.ascending {
        background-image: url(${sortingUpArrow});
      }
      &.rowSelector {
        visibility: hidden;
        width: 48px;
        margin-right: 0;
      }
    }
    & table>thead>tr>th>div.columnSelector {
      position: absolute;
      width: 14px;
      height: 14px;
      top: 3px;
      left: 3px;
      background-color: var(--coldNeutralColor22);
      cursor: pointer;
      &:hover {
        outline: var(--infoColor1) solid 1px;
      }
    }
    & table>thead>tr>th {
      & div.columnSelector>div {
        position: absolute;
        width: 6px;
        height: 6px;
        top: 4px;
        left: 4px;
        background-color: var(--coldNeutralColor7);
        display: none;
      }
      & div.columnSelector.checked>div {
        display: initial;
      }
    }
      & table>tbody>tr {
        position: relative;
        color: var(--coldNeutralColor1);
        font-weight: 100;
        height: 42px;
        margin-top: 7px;
        &.odd {
          background-color: var(--neutralColor1);
        }
        &.even {
          background-color: var(--neutralColor2);
        }
        &:hover {
          background-color: var(--coldNeutralColor21);
        }
      }
      & table>tbody>tr>td:nth-of-type(1) {
        display: none;
      }
      & table>tbody>tr>td>input, & table>tbody>tr>td>div {
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        padding: 3px;
        border-width: 0;
        background-color: transparent;
        font-family: var(--sansSerifFont);
        font-size: 16px;
        font-weight: 100;
        -moz-text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
        &:focus {
          outline: none;
        }
        &.editing {
          border: 1px solid var(--coldNeutralColor1);
          background-color: var(--coldNeutralColor22);
          box-shadow: 0px 7px 16px 0px rgba(var(--coldNeutralColor1RGB), 0.35);
        }
        &.edited {
          font-weight: 500;
        }
      }
      & table>tbody>tr>td>div {
        cursor: default;
        color: var(--coldNeutralColor15);
      }
    }
    & div.navigator {
      position: relative;
      margin-top: 47px;
      width: calc(100% - 48px);
      left: 48px;
      text-align: center;
      font-family: var(--sansSerifFont);
      font-weight: 900;
      font-style: italic;
      font-size: 16px;
      &>div {
        position: relative;
        display: inline-block;
        width: 650px;
        &>div.errorMessage {
          position: absolute;
          display: inline-block;
          background-color: var(--errorColor1);
          bottom: 31px;
          left: 310px;
          border: 2px solid var(--errorColor3);
          color: var(--coldNeutralColor22);
          font-weight: 100;
          font-size: 14px;
          font-style: normal;
          padding: 6px 7px;
          box-shadow: 0px 7px 16px 0px rgba(var(--coldNeutralColor1RGB), 0.35);
          border-radius: 4px;
        } 
      }
      &>div>input {
        width: 42px;
        height: 20px;
        margin: 0 9px;
        padding-block: 0;
        padding-inline: 0;
        box-sizing: border-box;
        border: 1px solid var(--coldNeutralColor1);
        background-color: var(--coldNeutralColor22);
        font-family: var(--sansSerifFont);
        font-weight: 900;
        font-style: italic;
        font-size: 16px;
        text-align: center;
        padding: 0;
        &:focus {
          border: 0;
          outline: 2px solid var(--coldNeutralColor15);
          box-shadow: 0px 3px 7px 0px rgba(var(--coldNeutralColor1RGB), 0.35);
        }
      }
      &>div>input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &>div>input[type=number] {
        -moz-appearance: textfield;
      }
      &>img {
        position: relative;
        top: 6px;
        cursor: pointer;
        z-index: 1;
      }
      &>img:nth-of-type(1) {
        left: 231px;
      }
      &>img:nth-of-type(2) {
        transform: rotate(180deg);
        right: 231px;
      }
    }
  `;
  
  return (
    <Table className="mainTable" style={style} isColumnResizable={true} isEditable={true} isSortable={true} itemsPerPage={16} isColumnSelectable={true} isRowSelectable={true} isExpandable={true} />
  );
};

export default MainTable