import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Status = ({ status }) => {
  const color = (() => {
    switch (status) {
      case "Not yet recruiting":
        return "#d89c1a";
      case "Enrolling by invitation":
        return "#1a6fd8";
      case "Completed":
        return "#C4C4C4";
      default:
        return "#1ad9c4";
    }
  })();
  return (
    <StatusView color={color}>
      <div role="presentation" />
      {status}
    </StatusView>
  );
};

export default Status;

Status.defaultProps = {
  status: "Recruiting",
};

Status.propTypes = {
  status: PropTypes.string,
};

const StatusView = styled.div`
  display: flex;
  align-items: center;
  color: #b4b4b4;
  margin-bottom: 10px;

  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ color }) => color};
    margin-right: 10px;
  }
`;
