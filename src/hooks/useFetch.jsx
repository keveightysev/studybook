import { useContext, useState, useEffect } from "react";
import axios from "axios";

import { Context } from "../context";

import { countryList, format } from "../utils";

const useFetch = async () => {
  const [success, setSuccess] = useState(false);
  const { state, dispatch } = useContext(Context);

  const { postalCode, country, condition } = state;
  useEffect(async () => {
    dispatch({ type: "DATA_FETCH_START" });
    try {
      const res = await axios.post(
        `https://places-dsn.algolia.net/1/places/query`,
        {
          query: postalCode,
          countries: [country.toLowerCase()],
        },
      );
      const [result] = res.data.hits;
      const { population, city, administrative } = result;
      const citySearch = population > 250000 && city ? city : administrative[0];
      const countrySearch = countryList.find(c => c.code === country).name;

      const response = await axios.post(
        `http://clinicaltrialadvisor.com/fetch_search`,
        {
          user_search: `${citySearch || countrySearch} ${condition}`,
          page: 1,
          gender: "male",
          age: 25,
        },
      );

      const { total_results: totalResults } = response.data;

      const results = JSON.parse(response.data.results);

      const studies = results.map(study => format(study));

      dispatch({
        type: "DATA_FETCH_SUCCESS",
        payload: { studies, totalResults },
      });

      setSuccess(true);
    } catch (err) {
      dispatch({ type: "DATA_FETCH_FAILURE", payload: err });
      setSuccess(false);
    }
  }, []);
  return success;
};

export default useFetch;
