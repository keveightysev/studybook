import React, { useContext } from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";

import { Context } from "../../../context";

const TentativeResults = ({ step, navigate }) => {
  const { state } = useContext(Context);

  const { distance } = state;

  const handleClick = () => {
    const prevPage = Number(step) + 1;
    navigate(`${prevPage}`);
  };

  const handleKey = e => {
    if (e.key === "Enter") {
      const prevPage = Number(step) + 1;
      navigate(`${prevPage}`);
    }
  };
  return (
    <Right>
      <ResultsHeader>212 trials found</ResultsHeader>
      {step !== "3" && distance ? (
        <NavArrow
          onClick={() => handleClick()}
          onKeyPress={e => handleKey(e)}
          tabIndex="0"
        />
      ) : null}
    </Right>
  );
};

export default TentativeResults;

const Right = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 30vh;
`;

const ResultsHeader = styled.h2`
  font-size: 2rem;
  padding: 20px 30px 30px;
  border-bottom: 1px solid #d9d9d9;
`;

const NavArrow = styled(FaAngleRight)`
  display: flex;
  font-size: 4rem;
  margin: 0 auto;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  color: #969797;
  transition: color 300ms ease;
  position: absolute;
  bottom: 20px;

  &:hover {
    color: #1ad9c4;
  }
`;

TentativeResults.propTypes = {
  step: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};
