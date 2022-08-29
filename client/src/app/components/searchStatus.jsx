import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  const renderPhrase = (length) => {
    if (length >= 5 && length <= 20) return "ов";
    if (length % 10 !== 1) return "а";
    return "";
  };
  return (
    <h3>
      <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
        {length > 0
          ? `В списке ${length} номер${renderPhrase(length)}`
          : "Список номеров пуст"}
      </span>
    </h3>
  );
};
SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};
export default SearchStatus;
