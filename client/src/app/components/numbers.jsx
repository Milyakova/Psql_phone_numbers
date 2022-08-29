import React, { useEffect, useState } from "react";
import { paginate } from "../../utils/paginate";
import GroupList from "./groupList";
import Pagination from "./pagination";
import SearchStatus from "./searchStatus";
import PhoneTable from "./phoneTable";
import _ from "lodash";
import Form from "./form";
import { useSelector } from "react-redux";
import { getNumbersList, removeNumber, updateNumber } from "../store/numbers";
import { getCountryCodes } from "../store/countryCodes";
import { useDispatch } from "react-redux";

const Numbers = () => {
  const numbers = useSelector(getNumbersList());
  const countryCodes = useSelector(getCountryCodes());

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState();
  const [sortBy, setSortBy] = useState({ path: "number", order: "asc" });
  const pageSize = 3;

  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCountry]);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleCountrySelect = (item) => {
    setSelectedCountry(item);
  };

  const handleSort = (item) => setSortBy(item);

  const handleDelete = (id) => {
    dispatch(removeNumber(id));
  };

  const handleToggleBookMark = (id) => {
    const number = numbers.find((n) => n.id === id);
    const payload = { ...number, bookmark: !number.bookmark };
    dispatch(updateNumber(payload));
  };

  const filteredNumbers = selectedCountry
    ? numbers?.filter(
        (number) =>
          JSON.stringify(number.countryId) ===
          JSON.stringify(selectedCountry.id)
      )
    : numbers;
  const count = filteredNumbers?.length;
  const sortedNumbers = _.orderBy(
    filteredNumbers,
    [sortBy.path],
    [sortBy.order]
  );
  const numbersCrop = paginate(sortedNumbers, currentPage, pageSize);
  const clearFilter = () => {
    setSelectedCountry();
  };

  return (
    <div className="d-flex flex-column">
      <Form countryCodes={countryCodes} />
      <div className="d-flex">
        {countryCodes && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              items={countryCodes}
              onItemSelect={handleCountrySelect}
              selectedItem={selectedCountry}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column mx-auto">
          <SearchStatus length={count} />
          {numbers && (
            <>
              <PhoneTable
                numbers={numbersCrop}
                onSort={handleSort}
                currentSort={sortBy}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
              />

              <div className="d-flex">
                <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
