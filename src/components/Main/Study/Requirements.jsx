import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Age from "./Age";
import Gender from "./Gender";

const Requirements = ({ eligibility }) => {
  const { age, gender } = eligibility;

  return (
    <Req>
      <h2>Key Participation Requirements</h2>
      <div>
        <Age age={age} />
        <Gender gender={gender} />
      </div>
    </Req>
  );
};

export default Requirements;

Requirements.defaultProps = {
  eligibility: {
    age: [0, 99],
    gender: undefined,
  },
};

Requirements.propTypes = {
  eligibility: PropTypes.shape({
    age: PropTypes.arrayOf(PropTypes.number),
    gender: PropTypes.oneOf(["Male", "Female", undefined]),
  }),
};

const Req = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > div {
    width: 50%
    display: flex;
    justify-content: space-evenly;
  }
`;
