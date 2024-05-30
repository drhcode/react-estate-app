import React from "react";
import PropTypes from "prop-types";
import "./tabs.scss"; // Import the SCSS file for styling

const DataTab = ({ data, renderHeader, renderContent }) => {
  return (
    <div className="data-tab-container">
      <div className="tab-header">{renderHeader()}</div>
      {data.length === 0 ? <p>No data available.</p> : renderContent(data)}
    </div>
  );
};

DataTab.propTypes = {
  data: PropTypes.array.isRequired,
  renderHeader: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
};

export default DataTab;
