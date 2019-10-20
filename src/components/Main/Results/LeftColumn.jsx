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
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #e7e7e7;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 30px;
  }

  button {
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 1px 2px 1px #b0b0b0;
    transition: all 300ms ease;

    &:hover {
      background: #1ad9c4;
      color: #fff;
    }
  }
`;
