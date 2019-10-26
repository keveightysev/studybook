const format = object => {
  const study = { ...object };
  delete study.criteria;
  delete study.facility;
  delete study.textblock;
  delete study.clinical_study;
  delete study.gender;
  delete study["Unnamed: 0.1"];
  const id = study["Unnamed: 0"];
  delete study["Unnamed: 0"];

  const eligibilityArr = study.eligibility.split("\n").filter(Boolean);
  const eligibility = {};
  let key = "inclusionCriteria";
  for (let i = 0; i < eligibilityArr.length; i += 1) {
    if (!eligibility[key]) eligibility[key] = [];
    if (eligibilityArr[i] === " Exclusion Criteria:") {
      key = "exclusionCriteria";
      if (!eligibility[key]) eligibility[key] = [];
    } else if (eligibilityArr[i - 1] === " Inclusion Criteria:") {
      eligibility[key].push(eligibilityArr[i].slice(1));
    } else if (eligibilityArr[i].slice(0, 3) === " - ") {
      const value =
        eligibilityArr[i + 1].slice(0, 3) !== " - "
          ? `${eligibilityArr[i].slice(3)} ${eligibilityArr[i + 1].slice(3)}`
          : eligibilityArr[i].slice(3);
      eligibility[key].push(value);
    } else if (eligibilityArr[i] === "Female" || eligibilityArr[i] === "Male") {
      key = "sex";
      if (!eligibility[key]) eligibility[key] = [];
      eligibility[key].push(eligibilityArr[i]);
    } else if (eligibilityArr[i].includes("Years")) {
      key = "age";
      if (!eligibility[key]) eligibility[key] = [];
      eligibility[key].push(
        Number(eligibilityArr[i].match(/^[0-9]*/g).join("")),
      );
    } else if (i === eligibilityArr.length - 1) {
      eligibility.acceptsHealthy = eligibilityArr[i] !== "No";
    }
  }

  return {
    ...study,
    id,
    eligibility,
    intervention: study.intervention.split("\n").filter(Boolean),
    lead_sponsor: study.lead_sponsor.split("\n").filter(Boolean),
    location: study.location.split("\n").filter(Boolean),
    sponsors: study.sponsors.split("\n").filter(Boolean),
  };
};

export default format;
