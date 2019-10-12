import React from "react";
import styled from "styled-components";

import Landing from "./Landing";

const Main = () => {
  return (
    <MainStyle>
      <Landing />
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.main`
  width: 100%;
  margin: 0 auto;
`;
