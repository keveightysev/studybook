import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Radio = ({ id, value }) => {
  return (
    <RadioButton htmlFor={id}>
      <input
        type="radio"
        id={id}
        name="distance"
        value={value}
        aria-label={`${value} miles`}
      />
      <div className="radio" />
      {value === "any" ? "Any distance" : `${value} miles`}
    </RadioButton>
  );
};

export default Radio;

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const RadioButton = styled.label`
  margin: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin-right: 20px;

    &:checked ~ .radio {
      background: #1ad9c4;
      border: 1px solid #fff;
    }
  }

  .radio {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    transition: background 300ms ease;

    &:before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #1ad9c4;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
`;
