import React from "react";
import PropTypes from "prop-types";

/* ----------------- Завдання 1. UserCard ----------------- */
function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "8px", padding: "8px" }}>
      <h3>{user.name}</h3>
      <p>Вік: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

/* ----------------- Завдання 2. TodoList ----------------- */
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/* ----------------- Завдання 3. ListOrSingle ----------------- */
function ListOrSingle({ data }) {
  if (Array.isArray(data)) {
    return (
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{data.value}</p>;
}

ListOrSingle.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

/* ----------------- Завдання 4. AtLeastOne ----------------- */
function AtLeastOne({ items }) {
  return (
    <div>
      <h4>Items:</h4>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

AtLeastOne.propTypes = {
  items: (props, propName, componentName) => {
    const value = props[propName];
    if (!Array.isArray(value)) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Очікується масив.`
      );
    }
    if (value.length === 0) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Масив не може бути порожнім.`
      );
    }
    return null;
  },
};

/* ----------------- Завдання 5. Product */
function Product({ product }) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>Ціна: {product.price} ₴</p>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value !== "number") {
        return new Error(
          `Invalid prop ${propName} supplied to ${componentName}. Очікується число.`
        );
      }
      if (value <= 0) {
        return new Error(
          `Invalid prop ${propName} supplied to ${componentName}. Ціна повинна бути > 0.`
        );
      }
      return null;
    },
  }).isRequired,
};