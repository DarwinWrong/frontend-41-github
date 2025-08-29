class ProductRepository{
    constructor(database) {
        this.database = database
    }
    save(product) {
        this.database.save(product)
    }
}
export { ProductRepository }