import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getNumbersLoadingStatus } from "../../store/numbers";
import { getCountryCodesLoadingStatus } from "../../store/countryCodes";
import useMockData from "../../../utils/mockData";

const AppLoader = ({ children }) => {
  const { initialize } = useMockData();
  const numbersStatusLoading = useSelector(getNumbersLoadingStatus());
  const countriesStatusLoading = useSelector(getCountryCodesLoadingStatus());
  useEffect(() => {
    initialize();
  }, []);

  if (numbersStatusLoading || countriesStatusLoading) return "loading";
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AppLoader;
