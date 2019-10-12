import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [condition, setCondition] = useState("");
  const [postal, setPostal] = useState("");
  return (
    <FormStyle>
      <label htmlFor="condition">
        <span className="hidden" role="definition">
          Medical Condition
        </span>
        <input
          type="text"
          placeholder="Medical Condition"
          id="condition"
          value={condition}
          onChange={e => setCondition(e.target.value)}
        />
      </label>
      <label htmlFor="postal">
        <span className="hidden" role="definition">
          Postal Code
        </span>
        <input
          type="number"
          placeholder="Postal Code"
          id="postal"
          value={postal}
          onChange={e => setPostal(e.target.value)}
        />
      </label>
      <button type="submit">Find a Trial</button>
    </FormStyle>
  );
};

export default Form;

const FormStyle = styled.form`
  width: 55%;
  min-width: 500px;
  display: flex;
  justify-content: space-between;
  margin-left: 75px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }

  label {
    font-size: 1.6rem;

    &:first-of-type {
      width: 60%;

      @media (max-width: 1150px) {
        width: 75%;
      }
    }

    &:last-of-type {
      width: 18%;
      min-width: 120px;
    }

    input {
      width: 100%;
      border: 1px solid #969797;
      border-radius: 20px;
      padding: 10px 0 10px 15px;

      &[type="number"]::-webkit-inner-spin-button,
      &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  button {
    width: 18%;
    min-width: 120px;
    font-size: 1.5rem;
    text-transform: uppercase;
    border-radius: 20px;
    background: #223547;
    padding: 10px;
    color: #fff;
    transition: all 300ms ease;

    &:hover {
      background: #1ad9c4;
    }

    @media (max-width: 1150px) {
      margin-top: 20px;
    }
  }
`;
