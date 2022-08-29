import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadcountryCodesList } from "../app/store/countryCodes.js";
import { loadNumbersList } from "../app/store/numbers.js";
const useMockData = () => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  async function initialize() {
    try {
      dispatch(loadNumbersList());
      dispatch(loadcountryCodesList());
    } catch (error) {
      setError(error);
    }
  }
  return { error, initialize };
};

export default useMockData;
