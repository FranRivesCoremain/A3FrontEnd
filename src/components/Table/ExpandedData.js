/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types"

const ExpandedData = (props) => {
  return (
    <div className={props.className} css={props.style}>
      <div></div>
    </div>
  )
};

ExpandedData.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}

export default ExpandedData;