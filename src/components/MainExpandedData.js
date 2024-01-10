// GENERAL
import { css } from '@emotion/react'
import React from "react"
import PropTypes from 'prop-types'

// COMPONENTS
import ExpandedData from "./Table/ExpandedData";

const MainExpandedData = (props) => {
  const style = css`
    position: absolute;
    width: calc(100% - 2px);
    /*height: 286px;*/
    height: 0;
    left: 0;
    border: ${props.expandedIndex === -1 ? '0' : '1px solid var(--coldNeutralColor7)'};
    top: 83px;
    background-color: ${props.expandedIndex % 2 === 0 ? 'var(--neutralColor1)' : 'var(--neutralColor2)'};
    box-shadow: 0px 7px 16px 0px rgba(var(--coldNeutralColor1RGB), 0.35);
  `;

  return (
    <ExpandedData className="mainExpandedData" style={style} />
  )
};

MainExpandedData.propTypes = {
  expandedIndex: PropTypes.number.isRequired,
}

export default MainExpandedData;