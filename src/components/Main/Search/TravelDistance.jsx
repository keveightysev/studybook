import React from "react";

const TravelDistance = () => {
  return (
    <div>
      <h2>How far are you willing to travel?</h2>
      <form>
        <label htmlFor="twenty">
          <input type="radio" id="twenty" name="distance" value="20" />
          20 miles
        </label>
        <label htmlFor="fifty">
          <input type="radio" id="fifty" name="distance" value="50" />
          50 miles
        </label>
        <label htmlFor="hundred">
          <input type="radio" id="hundred" name="distance" value="100" />
          100 miles
        </label>
        <label htmlFor="anyDistance">
          <input type="radio" id="anyDistance" name="distance" value="any" />
          Any Distance
        </label>
      </form>
    </div>
  );
};

export default TravelDistance;
