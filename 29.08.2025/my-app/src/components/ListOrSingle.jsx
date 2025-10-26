import React from "react";
import PropTypes from "prop-types";

function ListOrSingle({ data }) {
    return (
        <div>
            <h3>Компонент ListOrSingle</h3>
            {Array.isArray(data) ? (
              <ul>
                {data.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Одне значення: {data.value}</p>
            )}
          </div>
    )
}
ListOrSingle.propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.shape({
        value: PropTypes.string.isRequired,
      }),
    ]).isRequired,
}
  export default ListOrSingle