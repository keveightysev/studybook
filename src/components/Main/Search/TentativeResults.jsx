import React from "react";
import styled from "styled-components";

const TentativeResults = () => {
  return <ResultsHeader>212 trials found</ResultsHeader>;
};

export default TentativeResults;

const ResultsHeader = styled.h2`
  font-size: 2rem;
  padding: 20px 30px 30px;
  border-bottom: 1px solid #d9d9d9;
`;
