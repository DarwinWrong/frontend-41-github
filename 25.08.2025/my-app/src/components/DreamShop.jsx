import React from "react";

export default function DreamShop() {
    const products = [
        { id: 1, name: "Ноутбук", price: 25000, inStock: true },
        { id: 2, name: "Смартфон", price: 15000, inStock: false },
        { id: 3, name: "Навушники", price: 2000, inStock: true },
    ]
    
    const inStockCount = products.filter(p => p.inStock).length

    if (products.length === 0) return <p>Наразі немає товарів</p>
    
    return (
        <div>
            <ul>
                {products.map(p => (
                    <li key={p.id}>{p.name} - {p.inStock ? `${p.price}грн` : "Немає в наявності"}</li>
                ))}
            </ul>
            <p>
                {inStockCount > 0 ? `Загальна вартість товарів у наявності: ${inStockCount}` : "Склад порожній"}
            </p>
        </div>
    )
}