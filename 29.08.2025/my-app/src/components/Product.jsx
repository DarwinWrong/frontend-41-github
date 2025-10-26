import React from "react";
import PropTypes from "prop-types";

function Product({ product }) {
    return (
        <div>
      <h3>{product.title}</h3>
      <p>Ціна: {product.price} грн</p>
    </div>
    )
}

function positivePrice(props, propName, componentName) {
    const value = props[propName]
    if (typeof value !== "number") {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'.`
      )
    }
    if (value <= 0) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'. Значення має бути > 0.`
      )
    }
    return null
  }
Product.propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: positivePrice.isRequired,
    }).isRequired,
  }
  
  export default Product;
  

  