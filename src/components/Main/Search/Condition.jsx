import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../../../context";

import Countries from "../Landing/Countries";

const Form = () => {
  const { state, dispatch } = useContext(Context);
  const { condition, postalCode } = state;

  const handleChange = e => {
    dispatch({
      type: "UPDATE_INPUT",
      payload: { name: e.target.id, value: e.target.value },
    });
  };

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
          onChange={e => handleChange(e)}
        />
      </label>
      <label htmlFor="postal">
        <span className="hidden" role="definition">
          Postal Code
        </span>
        <input
          type="text"
          placeholder="Postal Code"
          id="postalCode"
          value={postalCode}
          onChange={e => handleChange(e)}
        />
      </label>
      <Countries handleChange={handleChange} fromSearchPage />
    </FormStyle>
  );
};

export default Form;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  label {
    width: 75%;
    font-size: 1.6rem;

    input {
      width: 100%;
      border: 1px solid #969797;
      border-radius: 20px;
      margin-bottom: 10px;
      padding: 10px 0 10px 15px;
      transition: all 300ms ease;

      &:focus {
        border-color: #1ad9c4;
      }
    }
  }
`;
