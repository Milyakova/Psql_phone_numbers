import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns, countries }) => {
  const getTrClasses = (item) => {
    const country = countries?.find((c) => item.countryId === c.id);
    return country.color;
  };

  const renderContent = (item, column) => {
    if (columns[column].component) {
      const component = columns[column].component;
      if (typeof component === "function") return component(item);
      else return component;
    }
    return _.get(item, columns[column].path);
  };

  if (countries)
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className={"table-" + getTrClasses(item)}>
            {Object.keys(columns).map((column) => (
              <td key={column} className="px-4">
                {renderContent(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
};
TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired,
  countries: PropTypes.array,
};
export default TableBody;
