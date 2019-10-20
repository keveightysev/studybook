import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";

import { Context } from "../../../context";

import ListingTable from "./ListingTable";
import PageSelection from "./PageSelection";

const Listings = ({ page, navigate }) => {
  const { dispatch } = useContext(Context);
  useEffect(() => {
    const fetchData = async pageNo => {
      dispatch({ type: "DATA_FETCH_START" });
      try {
        const res = await axios.post(
          `http://clinicaltrialadvisor.com/fetch_data_${pageNo}`,
          {
            user_search: "toronto obesity",
          },
        );

        const data = res.data.map(line => {
          const newLine = { ...line, probability: line["Unnamed: 0"] };
          delete newLine["Unnamed: 0"];
          return newLine;
        });

        dispatch({ type: "DATA_FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "DATA_FETCH_FAILURE", payload: err });
      }
    };
    fetchData(page);
  }, [dispatch, page]);
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
