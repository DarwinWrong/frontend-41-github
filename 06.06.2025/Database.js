class Database {
    save(product) {
        throw new Error('Метод save() повинен бути реалізований.')
    }
}

class MySQLDatabase extends Database {
    save(product) {
        console.log(`Збережено у MySQL: ${product.name} (${product.price} грн)`)
    }
}

class MongoDatabase extends Database {
    save(product) {
        console.log(`Збережено у MongoDB: ${product.name} (${product.price} грн)`)
    }
}

export { Database, MySQLDatabase, MongoDatabase }