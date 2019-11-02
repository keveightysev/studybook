import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Context } from "../../../context";

const Radio = ({ id, value }) => {
  const { state, dispatch } = useContext(Context);

  const radio = useRef(null);

  const { gender } = state;

  useEffect(() => {
    if (gender === value) {
      radio.current.checked = true;
    }
  }, [gender, value]);

  const handleClick = e => {
    if (e.target.name) {
      dispatch({ type: "UPDATE_INPUT", payload: { name: "gender", value } });
    }
  };

  return (
    <RadioButton htmlFor={id} name="gender" onClick={e => handleClick(e)}>
      <input
        type="radio"
        name="gender"
        value={value}
        id={id}
        aria-label={`${value} miles`}
        ref={radio}
      />
      <div className="radio" role="presentation" />
      {value.charAt(0).toUpperCase() + value.slice(1, value.length)}
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
