import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import Landing from "./Landing";
import Search from "./Search";

const Main = () => {
  return (
    <MainStyle>
      <Router>
        <Landing path="/" />
        <Search path="search/*" />
      </Router>
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.main`
  width: 100%;
  margin: 0 auto;
`;
