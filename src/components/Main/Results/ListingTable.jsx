import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Context } from "../../../context";

import ListingRow from "./ListingRow";

const ListingTable = ({ navigate }) => {
  const { state } = useContext(Context);
  const { data } = state;
  return (
    <Table>
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
              id,
            } = listing;
            return (
              <ListingRow
                condition={condition}
                officialTitle={officialTitle}
                city={city}
                state={st}
                country={country}
                overallStatus={overallStatus}
                key={id}
                id={id}
                navigate={navigate}
              />
            );
          })}
      </tbody>
    </Table>
  );
};

export default ListingTable;

ListingTable.defaultProps = {
  navigate: null,
};

ListingTable.propTypes = {
  navigate: PropTypes.func,
};

const Table = styled.table`
  min-height: calc(100vh - 50px);
  th {
    text-align: left;
    padding: 20px 0 10px;
    font-size: 1.4rem;
    font-weight: 700;
    max-width: 300px;

    &:nth-of-type(4) {
      max-width: 75px;
    }
  }

  td {
    padding: 20px 20px 20px 0;
    vertical-align: middle;

    &:first-of-type {
      font-size: 1rem;
      max-width: 100px;
    }

    &:nth-of-type(2) {
      font-size: 1.2rem;
      font-weight: 600;
      max-width: 400px;
    }

    &:nth-of-type(4) {
      max-width: 75px;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 30px;
    color: #fff;
    background: #223547;
    border: 1px solid #223547;
    transition: all 300ms ease;

    &:hover {
      color: #223547;
      background: #fff;
    }
  }
`;
