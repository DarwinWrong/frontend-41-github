import React, { useMemo, useState } from "react";

const initialProducts = [
  { id: 1, name: "Ноутбук", price: 25000, inStock: true },
  { id: 2, name: "Смартфон", price: 15000, inStock: false },
  { id: 3, name: "Навушники", price: 2000, inStock: true },
  
];

export default function DreamShop() {
  const [products] = useState(initialProducts);

  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const [sortByPrice, setSortByPrice] = useState(false);

  const inStockCount = useMemo(
    () => products.filter((p) => p.inStock).length,
    [products]
  );


  const displayedProducts = useMemo(() => {
    let arr = products.slice(); 
    if (showInStockOnly) {
      arr = arr.filter((p) => p.inStock);
    }
    if (sortByPrice) {
      arr = arr.slice().sort((a, b) => a.price - b.price);
    }
    return arr;
  }, [products, showInStockOnly, sortByPrice]);

  return (
    <div style={styles.container}>
      <h2>Магазин мрії</h2>

      <div style={styles.controls}>
        <button
          onClick={() => setShowInStockOnly((s) => !s)}
          style={styles.button}
        >
          {showInStockOnly ? "Показати всі товари" : "Показати тільки в наявності"}
        </button>

        <button
          onClick={() => setSortByPrice((s) => !s)}
          style={styles.button}
        >
          {sortByPrice ? "Скасувати сортування" : "Сортувати за ціною ↑"}
        </button>
      </div>

      {products.length === 0 ? (
        <p>Наразі немає товарів</p>
      ) : (
        <>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Назва</th>
                <th style={styles.th}>Ціна</th>
                <th style={styles.th}>В наявності</th>
              </tr>
            </thead>
            <tbody>
              {displayedProducts.map((p) => (
                <tr key={p.id} style={styles.tr}>
                  <td style={styles.td}>{p.id}</td>
                  <td style={styles.td}>{p.name}</td>
                  <td style={styles.td}>
                    {p.inStock ? `${p.price.toLocaleString()} ₴` : "Немає в наявності"}
                  </td>
                  <td style={styles.td}>{p.inStock ? "Так" : "Ні"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={styles.footer}>
            {inStockCount > 0 ? (
              <p>Загальна кількість товарів у наявності: {inStockCount}</p>
            ) : (
              <p style={{ color: "red", fontWeight: "bold" }}>Склад порожній</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 720,
    margin: "20px auto",
    padding: 16,
    fontFamily: "Arial, sans-serif",
  },
  controls: {
    display: "flex",
    gap: 8,
    marginBottom: 12,
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: 6,
    border: "1px solid #ccc",
    background: "#f6f6f6",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 12,
  },
  th: {
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    padding: "8px 6px",
  },
  tr: {
    borderBottom: "1px solid #eee",
  },
  td: {
    padding: "8px 6px",
  },
  footer: {
    marginTop: 8,
  },
};