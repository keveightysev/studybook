import React from "react";
import styled from "styled-components";

const LeftColumn = () => {
  return (
    <Column>
      <h2>12</h2>
      <p>trials found</p>
      <button type="button">Try Another Search</button>
    </Column>
  );
};

export default LeftColumn;

const Column = styled.aside`
  width: 10%;
`;
