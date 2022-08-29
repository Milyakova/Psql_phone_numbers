import React from "react";
import PropTypes from "prop-types";
const GroupList = ({ items, onItemSelect, selectedItem }) => {
  if (!Array.isArray(items)) {
    return (
      <ul className="list-group">
        {Object.keys(items).map((item) => (
          <li
            key={items[item].id}
            className={
              "list-group-item" +
              (items[item] === selectedItem ? " active" : "")
            }
            onClick={() => onItemSelect(items[item])}
            role="button"
          >
            {items[item].country}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className={
            "list-group-item" + (item === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(item)}
          role="button"
        >
          {item.country}
        </li>
      ))}
    </ul>
  );
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};
export default GroupList;
