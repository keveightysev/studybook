import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import TravelDistance from "./TravelDistance";
import Progress from "./Progress";
import TentativeResults from "./TentativeResults";

const Search = () => {
  return (
    <SearchStyle>
      <Progress />
      <Router>
        <TravelDistance path="2" />
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
