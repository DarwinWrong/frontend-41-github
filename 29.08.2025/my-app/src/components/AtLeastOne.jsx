import React from "react";
import PropTypes from "prop-types";

function AtLeastOne({ items }) {
    if (!Array.isArray(items)) {
        return (
          <div>
            <h3>Компонент AtLeastOne</h3>
            <p style={{ color: "red" }}>item не є масивом</p>
          </div>
        );
      }
    return (
        <div>
            <h3>Компонент AtLeastOne</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
    )
}

function nonEmptyArray(props, propName, componentName) {
    const value = props[propName]
    if (!Array.isArray(value)) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'.`
      )
    }

    if (value.length === 0) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'.`
      )
    }
  
    return null
}
  
AtLeastOne.propTypes = {
    items: nonEmptyArray.isRequired,
  }
  
  export default AtLeastOne