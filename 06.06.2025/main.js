import { Product, ProductValidator } from './Product.js'
import { MySQLDatabase, MongoDatabase } from './Database.js'
import { ProductRepository } from './ProductRepository.js'
import { ApplePay, GooglePay } from './PaymentMethod.js'
import { NotificationService } from './NotificationService.js'
import { RestApiClient, ProductService } from './ProductService.js'

async function main() {
    const product = new Product('iPhone 15', 45000, 'Смартфони')

    ProductValidator.validate(product)

    const database = new MySQLDatabase()
    const repository = new ProductRepository(database)
    repository.save(product)

    const payment = new ApplePay()
    payment.pay(product.price)

    const notification = new NotificationService()
    notification.notify(`Оплата успішна: ${product.name}`)

    const apiClient = new RestApiClient()
    const productService = new ProductService(apiClient)
    const products = await productService.getProducts()

    console.log('Завантажені товари:', products)
}

main()