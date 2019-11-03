import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Age = ({ age }) => {
  const [minAge, maxAge] = age;
  return (
    <AgeDisplay>
      <h3>Age</h3>
      <div>
        <div>
          <h4>{minAge}</h4>
          <p>years</p>
        </div>
        <div role="presentation">&#8210;</div>
        <div>
          <h4>{maxAge}</h4>
          <p>years</p>
        </div>
      </div>
    </AgeDisplay>
  );
};

export default Age;

Age.propTypes = {
  age: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const AgeDisplay = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 115px;
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

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 1.5rem;
      }
    }
  }
`;
