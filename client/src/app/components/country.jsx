import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  getcountryCodeById,
  getCountryCodesLoadingStatus,
} from "../store/countryCodes";

const Country = ({ id, name }) => {
  const country = useSelector(getcountryCodeById(id));
  const countriesIsLoading = useSelector(getCountryCodesLoadingStatus());

  if (!countriesIsLoading) {
    return name === "Код" ? (
      <p className=" mb-1">+{country?.combination}</p>
    ) : (
      <p className="mb-1">{country?.country}</p>
    );
  } else return "Loading";
};

export default Country;

Country.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};
