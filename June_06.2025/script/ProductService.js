export class ProductService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async fetchProducts() {
    return await this.apiClient.fetchProducts();
  }
}