import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark";
import Country from "./country";
import { useSelector } from "react-redux";
import { getCountryCodes } from "../store/countryCodes";
const PhoneTable = ({
  numbers,
  onSort,
  currentSort,
  onToggleBookMark,
  onDelete,
}) => {
  const countries = useSelector(getCountryCodes());
  const columns = {
    numeration: {},
    country: {
      name: "Страна",
      component: (number) => <Country id={number.countryId} name="Страна" />,
    },
    countryCode: {
      name: "Код",
      component: (number) => <Country id={number.countryId} name="Код" />,
    },
    number: { path: "value", name: "Номер" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (number) => (
        <BookMark
          status={number.bookmark}
          onClick={() => onToggleBookMark(number.id)}
        />
      ),
    },
    delete: {
      name: "Удалить",
      component: (number) => (
        <button onClick={() => onDelete(number.id)} className="btn btn-danger">
          <i className="bi bi-trash-fill"></i>
        </button>
      ),
    },
  };
  return (
    <table className="table w-100">
      <TableHeader {...{ onSort, currentSort, columns }} />
      <TableBody {...{ columns, data: numbers, countries }} />
    </table>
  );
};
PhoneTable.propTypes = {
  numbers: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default PhoneTable;
