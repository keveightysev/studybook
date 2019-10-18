import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import LeftColumn from "./LeftColumn";
import Listings from "./Listings";

const Results = () => {
  return (
    <ResultsPage>
      <LeftColumn />
      <Router>
        <Listings path=":page" />
      </Router>
    </ResultsPage>
  );
};

export default Results;

const ResultsPage = styled.main`
  display: flex;
  width: 95%;
  max-width: 1500px;
  margin: 0 auto;
`;
