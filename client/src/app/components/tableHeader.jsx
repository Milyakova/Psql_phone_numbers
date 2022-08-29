import React from "react";
import PropTypes from "prop-types";
const TableHeader = ({ onSort, currentSort, columns }) => {
  const handleSort = (item) => {
    if (currentSort.path === item) {
      onSort({
        ...currentSort,
        order: currentSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };
  const renderSortArrow = (currentSort, currentPath) => {
    if (currentSort.path === currentPath) {
      if (currentSort.order === "asc") {
        return <i className="bi bi-caret-down-fill"></i>;
      } else {
        return <i className="bi bi-caret-up-fill"></i>;
      }
    }
    return null;
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            scope="colSpan"
            role={columns[column].path && "button"}
            className="px-4"
          >
            {columns[column].name}{" "}
            {renderSortArrow(currentSort, columns[column].path)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};
export default TableHeader;
