import { Product } from './Product.js';
import { ProductValidator } from './ProductValidator.js';
import { MySQLDatabase } from './MySQLDatabase.js';
import { ProductRepository } from './ProductRepository.js';
import { ApplePay } from './ApplePay.js';
import { NotificationService } from './NotificationService.js';
import { ProductService } from './ProductService.js';
import { RestApiClient } from './RestApiClient.js';

const product = new Product('Laptop', 1500, 'Electronics');
ProductValidator.validate(product);

const database = new MySQLDatabase();
const repository = new ProductRepository(database);
repository.save(product);

const payment = new ApplePay();
payment.pay(product.price);

const notifier = new NotificationService();
notifier.notify('Payment successful');

const productService = new ProductService(new RestApiClient());
const products = await productService.fetchProducts();
console.log('Fetched products:', products);
