import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Progress = () => {
  const progressCircle = useRef(null);

  const setProgress = (percent, circumference) => {
    return circumference - (percent / 100) * circumference;
  };

  useEffect(() => {
    const circle = progressCircle.current;
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = setProgress(30, circumference);
    circle.style.strokeDashoffset = offset;
  }, []);

  return (
    <ProgressCircle>
      <circle r="49" cx="60" cy="60" />
      <circle
        r="48"
        cx="60"
        cy="60"
        strokeDashoffset={48 * 2 * Math.PI}
        stroke="#1ad9c4"
        strokeWidth="5px"
        ref={progressCircle}
      />
    </ProgressCircle>
  );
};

export default Progress;

const ProgressCircle = styled.svg`
  width: 120px;
  height: 120px;

  circle {
    &:first-of-type {
      fill: transparent;
      stroke: #d9d9d9;
      stroke-width: 1px;
    }
    &:last-of-type {
      fill: transparent;
      transition: stroke-dashoffset 350ms;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
  }
`;
