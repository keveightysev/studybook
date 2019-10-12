import React from "react";
import styled from "styled-components";

import TravelDistance from "./TravelDistance";
import Progress from "./Progress";
import TentativeResults from "./TentativeResults";

const Search = () => {
  return (
    <SearchStyle>
      <Progress />
      <TravelDistance />
      <TentativeResults />
    </SearchStyle>
  );
};

export default Search;

const SearchStyle = styled.main`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
