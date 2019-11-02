import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Context } from "../../../context";

const Study = ({ id }) => {
  const { state } = useContext(Context);
  const { data } = state;
  const [study, setStudy] = useState({});

  useEffect(() => {
    const thisStudy = data.find(stud => stud.id === Number(id));
    setStudy(() => thisStudy);
  }, [id, data]);

  return (
    <>
      <h2>{study && study.overall_status}</h2>
      <h2>{study && study.condition}</h2>
      <h2>{study && study.brief_title}</h2>
      <a href={study && study.url} target="_blank" rel="noopener noreferrer">
        ClinicalTrials.gov -&nbsp;
        {study && study.gov_id}
        &nbsp;
        <FaExternalLinkAlt />
      </a>
      <h2>Study Purpose</h2>
      <p>{study && study.brief_summary}</p>
      <h2>Key Participation Requirements</h2>
      <h3>Age</h3>
      <h4>
        {study &&
          study.eligibility &&
          study.eligibility.age &&
          study.eligibility.age[0]}
      </h4>
      <h4>
        {study &&
          study.eligibility &&
          study.eligibility.age &&
          study.eligibility.age[1]}
      </h4>
      <h3>Gender</h3>
      <h4>
        {study &&
          study.eligibility &&
          study.eligibility.gender &&
          study.eligibility.gender}
      </h4>
    </>
  );
};

export default Study;

Study.defaultProps = {
  id: "1",
};

Study.propTypes = {
  id: PropTypes.string,
};
