import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";

import { Context } from "../../../context";
import countryList from "../../../utils/countryList";
import format from "../../../utils/formatStudy";

import ListingTable from "./ListingTable";
import PageSelection from "./PageSelection";

const Listings = ({ page, navigate }) => {
  const { state, dispatch } = useContext(Context);
  const { postalCode, country, condition } = state;
  useEffect(() => {
    const fetchData = async pageNo => {
      dispatch({ type: "DATA_FETCH_START" });
      try {
        const res = await axios.post(
          `https://places-dsn.algolia.net/1/places/query`,
          {
            query: postalCode,
            countries: [country.toLowerCase()],
          },
        );
        const [result] = res.data.hits;
        const { population, city, administrative } = result;
        const citySearch =
          population > 250000 && city ? city : administrative[0];
        const countrySearch = countryList.find(c => c.code === country).name;

        const response = await axios.post(
          `http://clinicaltrialadvisor.com/fetch_data_${pageNo}`,
          {
            user_search: `${citySearch || countrySearch} ${condition}`,
          },
        );

        const studies = response.data.map(study => format(study));

        dispatch({ type: "DATA_FETCH_SUCCESS", payload: studies });
      } catch (err) {
        dispatch({ type: "DATA_FETCH_FAILURE", payload: err });
      }
    };
    fetchData(page);
  }, [dispatch, page, condition, country, postalCode]);
  return (
    <ListingsView>
      <h2>1 - 10 of 12 Results</h2>
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
  padding: 0 20px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
