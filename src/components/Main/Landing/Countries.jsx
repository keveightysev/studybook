import React from "react";
import PropTypes from "prop-types";

import countryList from "./countryList";

const Countries = ({ handleChange }) => {
  return (
    <label htmlFor="country">
      <span className="hidden" role="definition">
        Country
      </span>
      <select name="country" id="country" onChange={e => handleChange(e)}>
        {countryList.map(({ name, code }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Countries;

Countries.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
