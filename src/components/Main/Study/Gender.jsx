import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GiMale, GiFemale } from "react-icons/gi";

const Gender = ({ gender }) => {
  return (
    <GenderDisplay>
      <h3>Gender</h3>
      <div>
        {(gender === "female" || gender === undefined) && <GiFemale />}
        {(gender === "male" || gender === undefined) && <GiMale />}
      </div>
    </GenderDisplay>
  );
};

export default Gender;

Gender.defaultProps = {
  gender: undefined,
};

Gender.propTypes = {
  gender: PropTypes.oneOf(["male", "female", undefined]),
};

const GenderDisplay = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  font-size: 1.8rem;
  font-weight: 600;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 5rem;
  }
`;
