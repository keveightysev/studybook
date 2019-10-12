import React from "react";
import styled from "styled-components";

import Radio from "./Radio";

const TravelDistance = () => {
  return (
    <Travel>
      <h2>How far are you willing to travel?</h2>
      <form>
        <Radio id="twenty" value="20" />
        <Radio id="fifty" value="50" />
        <Radio id="hundred" value="100" />
        <Radio id="anyDistance" value="any" />
      </form>
    </Travel>
  );
};

export default TravelDistance;

const Travel = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;

  h2 {
    margin: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;
