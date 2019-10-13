import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import Progress from "./Progress";
import TentativeResults from "./TentativeResults";

import TravelDistance from "./TravelDistance";
import Age from "./Age";

const Search = () => {
  return (
    <SearchStyle>
      <Progress />
      <Router>
        <TravelDistance path="2" />
        <Age path="3" />
      </Router>
      <TentativeResults />
    </SearchStyle>
  );
};

export default Search;

const SearchStyle = styled.main`
  width: 75%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  div {
    width: 55%;
  }
`;
