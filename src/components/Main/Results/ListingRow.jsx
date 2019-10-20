import React from "react";
import PropTypes from "prop-types";

import Status from "./Status";

const ListingRow = ({
  condition,
  officialTitle,
  city,
  state,
  country,
  overallStatus,
  //   navigate,
}) => {
  return (
    <tr>
      <td>{condition}</td>
      <td>{officialTitle}</td>
      <td>
        {state === "Missing"
          ? `${city}, ${country}`
          : `${city}, ${state}, ${country}`}
      </td>
      <Status status={overallStatus} />
      <td>
        <button type="button">View Study</button>
      </td>
    </tr>
  );
};

export default ListingRow;

ListingRow.defaultProps = {
  //   navigate: null,
};

ListingRow.propTypes = {
  condition: PropTypes.string.isRequired,
  officialTitle: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  overallStatus: PropTypes.string.isRequired,
  //   navigate: PropTypes.func,
};
