class Product {
    constructor(name, price, category) {
        this.name = name
        this.price = price
        this.category = category
    }
}

class ProductValidator{
    static validate(product) {
        if (!product.name || product.name.trim() === '') {
            throw new Error('Назва продукту не може бути порожньою.')
        }
        if (product.price <= 0) {
            throw new Error('Ціна продукту повинна бути більшою за нуль.')
        }
        return true
    }
}

export { Product, ProductValidator }