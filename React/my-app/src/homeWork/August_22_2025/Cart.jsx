import React, { useReducer, useEffect } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }

    case "INCREASE":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        )
      };

    case "DECREASE":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload && i.quantity > 1
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

function calcTotal(items, discount = 0, delivery = 0) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return subtotal - subtotal * discount + delivery;
}

export default function Cart() {
  const [state, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
      discount: 0.1, 
      delivery: 50   
    },
    (initial) => {
      const saved = localStorage.getItem("cartState");
      return saved ? JSON.parse(saved) : initial;
    }
  );

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  const total = calcTotal(state.items, state.discount, state.delivery);

  return (
    <div style={{ padding: 20 }}>
      <h2>🛍 Мій кошик</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: { id: 1, name: "Товар 1", price: 100 }
          })
        }
      >
        Додати "Товар 1"
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: { id: 2, name: "Товар 2", price: 200 }
          })
        }
      >
        Додати "Товар 2"
      </button>

      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} грн × {item.quantity}
            <div>
              <button
                onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
                disabled={item.quantity === 1}
              >
                –
              </button>
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: item.id })
                }
              >
                ❌ Видалити
              </button>
            </div>
          </li>
        ))}
      </ul>

      <hr />
      <p>Знижка: {state.discount * 100}%</p>
      <p>Доставка: {state.delivery} грн</p>
      <h3>Разом: {total} грн</h3>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Очистити кошик
      </button>
    </div>
  );
}