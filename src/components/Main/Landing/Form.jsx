import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

import { Context } from "../../../context";
import countryList from "./countryList";

import Countries from "./Countries";

const Form = ({ navigate }) => {
  const { state, dispatch } = useContext(Context);
  const { condition, postalCode, country } = state;

  const handleChange = e => {
    dispatch({
      type: "UPDATE_INPUT",
      payload: { name: e.target.id, value: e.target.value },
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (condition && postalCode && country) {
      const res = await axios.post(
        `https://places-dsn.algolia.net/1/places/query`,
        {
          query: postalCode,
          countries: [country.toLowerCase()],
        },
      );
      const [result] = res.data.hits;
      const { population, city, administrative } = result;
      const citySearch = population > 250000 && city ? city : administrative[0];
      const countrySearch = countryList.find(c => c.code === country).name;

      const response = await axios.post(
        `http://clinicaltrialadvisor.com/fetch_data_1`,
        {
          user_search: `${citySearch || countrySearch} ${condition}`,
        },
      );

      console.log(response.data);
    }
  };

  return (
    <FormStyle onSubmit={e => handleSubmit(e)}>
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
      <Countries handleChange={handleChange} />
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

Form.defaultProps = {
  navigate: () => {},
};

Form.propTypes = {
  navigate: PropTypes.func,
};
