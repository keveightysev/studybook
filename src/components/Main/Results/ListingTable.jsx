import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../../../context";

import ListingRow from "./ListingRow";

const ListingTable = ({ navigate }) => {
  const { state } = useContext(Context);
  const { data } = state;
  return (
    <table>
      <thead>
        <tr>
          <th>Condition</th>
          <th>Study Title</th>
          <th>Study Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(listing => {
            const {
              condition,
              official_title: officialTitle,
              city,
              state: st,
              country,
              overall_status: overallStatus,
              probability,
            } = listing;
            return (
              <ListingRow
                condition={condition}
                officialTitle={officialTitle}
                city={city}
                state={st}
                country={country}
                overallStatus={overallStatus}
                key={probability}
                navigate={navigate}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default ListingTable;

ListingTable.defaultProps = {
  navigate: null,
};

ListingTable.propTypes = {
  navigate: PropTypes.func,
};
