class RestApiClient{
    async fetchProducts() {
        return [
            { name: 'Ноутбук', price: 25000, category: 'Електроніка' },
            { name: 'Кава', price: 200, category: 'Напої' }
        ]
    }
}
class ProductService{
    constructor(apiClient) {
        this.apiClient = apiClient
    }
    async getProducts() {
        return await this.apiClient.fetchProducts()
    }
}

export { ProductService, RestApiClient }