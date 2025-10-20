import React, { useState } from "react";

export default function DreamShop() {
  const products = [
    { id: 1, name: "Ноутбук", price: 25000, inStock: true },
    { id: 2, name: "Смартфон", price: 15000, inStock: false },
    { id: 3, name: "Навушники", price: 2000, inStock: true },
  ];

  const [showInStock, setShowInStock] = useState(false);

  const filterProducts = showInStock
    ? products.filter((p) => p.inStock)
    : products;

  const sortByPrice = [...filterProducts].sort((a, b) => a.price - b.price);

  const productsCount = products.filter((p) => p.inStock).length;

  return (
    <div>
      <h2>Dream Shop</h2>
      <button onClick={() => setShowInStock((prev) => !prev)}>
        {showInStock ? "Показати всі товари" : "Показати тільки в наявності"}
      </button>

      {sortByPrice.length === 0 ? (
        <p>Наразі немає товарів</p>
      ) : (
        <ul>
          {sortByPrice.map((product) => (
            <li key={product.id}>
              {product.name}
              <span>
                {product.inStock
                  ? `: ${product.price} грн`
                  : ": Немає в наявносі"}
              </span>
            </li>
          ))}
        </ul>
      )}
      {productsCount > 0 ? (
        <p>У наявності: {productsCount}</p>
      ) : (
        <p style={{ color: "red" }}>Склад порожній</p>
      )}
    </div>
  );
}
