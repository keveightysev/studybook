import React from "react";
import styled from "styled-components";

const Age = () => {
  return (
    <AgeStyle htmlFor="age">
      How old are you?
      <div>
        <input type="number" id="age" />
      </div>
    </AgeStyle>
  );
};

export default Age;

const AgeStyle = styled.label`
  font-size: 1.8rem;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  div {
    margin-top: 20px;
    position: relative;

    &:after {
      content: "years";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 70px;
      font-size: 1.3rem;
      color: #b2b2b2;
    }
  }

  input {
    font-size: 1.6rem;
    border: 1px solid #969797;
    border-radius: 20px;
    padding: 10px 0 10px 15px;

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
