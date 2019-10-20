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
  justify-content: center;
  width: 95%;
  min-height: calc(100vh - 191px);
  max-width: 1500px;
  margin: 0 auto;

  > div {
    height: 100%;
    width: 75%;
  }
`;
