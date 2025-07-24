import { Database } from './Database.js';
export class MongoDatabase extends Database {
  save(product) {
    console.log('Saved to MongoDB:', product);
  }
}