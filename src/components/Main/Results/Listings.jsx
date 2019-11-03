import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Context } from "../../../context";
import { fetchData } from "../../../utils";

import ListingTable from "./ListingTable";
import PageSelection from "./PageSelection";

const Listings = ({ page, navigate }) => {
  const { state, dispatch } = useContext(Context);
  const {
    postalCode,
    country,
    condition,
    gender,
    age,
    totalResults: results,
    data,
  } = state;
  useEffect(() => {
    const fetch = async () => {
      dispatch({ type: "DATA_FETCH_START" });
      const { status, studies, totalResults } = await fetchData(
        condition,
        postalCode,
        country,
        Number(page),
        gender,
        age,
      );
      if (status === 200) {
        dispatch({
          type: "DATA_FETCH_SUCCESS",
          payload: { studies, totalResults },
        });
      } else {
        dispatch({
          type: "DATA_FETCH_FAILURE",
          payload: { studies, totalResults },
        });
      }
    };
    fetch();
  }, [dispatch, page, condition, country, postalCode, age, gender]);
  return (
    <ListingsView>
      <h2>
        1 -&nbsp;
        {data.length}
        &nbsp;of&nbsp;
        {results}
        &nbsp;Results
      </h2>
      <ListingTable navigate={navigate} />
      <PageSelection page={page} />
    </ListingsView>
  );
};

export default Listings;

Listings.defaultProps = {
  page: "1",
  navigate: null,
};

Listings.propTypes = {
  page: PropTypes.string,
  navigate: PropTypes.func,
};

const ListingsView = styled.section`
  width: 100%;
  min-height: calc(100vh - 191px);
  padding: 0 20px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
