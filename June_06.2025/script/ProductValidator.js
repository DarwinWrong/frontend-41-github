export class ProductValidator {
  static validate(product) {
    if (!product.name || product.price <= 0) {
      throw new Error('Invalid product');
    }
  }
}