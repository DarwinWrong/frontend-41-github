import React, { useReducer, useEffect, act } from "react";

const initialState = { cart: [], total: 0 };

function caclTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function init() {
  const stored = localStorage.getItem("cart");
  return stored
    ? { cart: JSON.parse(stored), total: caclTotal(JSON.parse(stored)) }
    : initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case "add item": {
      const item = action.payload;
      const exist = state.cart.find((i) => i.id === item.id);
      const newCart = exist
        ? state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.cart, { ...item, quantity: 1 }];
      return { ...state, cart: newCart, total: caclTotal(newCart) };
    }
    case "remove item": {
      const newCart = state.cart.filter((i) => i.id !== action.payload);
      return { ...state, cart: newCart, total: caclTotal(newCart) };
    }
    case "INCREMENT": {
      const newCart = state.cart.map((i) =>
        i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
      );
      return { ...state, cart: newCart, total: caclTotal(newCart) };
    }
    case "DECREMENT": {
      const newCart = state.cart
        .map((i) =>
          i.id === action.payload && i.quantity > 1
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0);
      return { ...state, cart: newCart, total: caclTotal(newCart) };
    }
    case "CLEAR_CART":
      return { cart: [], total: 0 };
    default:
      return state;
  }
}

const products = [
  { id: 1, name: "Laptop", price: 20000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Tablet", price: 15000 },
];

export default function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <div>
      <h2>Товари</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price}грн
          <button onClick={() => dispatch({ type: "add item", payload: p })}>
            Додати до кошика
          </button>
        </div>
      ))}
      <h2>Кошик</h2>
      {state.cart.length === 0 && <p>Кошик порожній</p>}
      {state.cart.map((i) => (
        <div key={i.id}>
          {i.name} - {i.price}грн * {i.quantity}
          <button
            onClick={() => dispatch({ type: "INCREMENT", payload: i.id })}
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: "DECREMENT", payload: i.id })}
            disabled={i.quantity === 1}
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: "remove item", payload: i.id })}
          >
            Видалити
          </button>
        </div>
      ))}
      {state.cart.length > 0 && (
        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Очистити кошик
        </button>
      )}
      <h3>Всього: {state.total}грн</h3>
    </div>
  );
}
