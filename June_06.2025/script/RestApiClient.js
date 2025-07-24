export class RestApiClient {
  async fetchProducts() {
    return [
      { name: 'Phone', price: 500, category: 'Electronics' },
      { name: 'Shoes', price: 120, category: 'Clothing' },
    ];
  }
}