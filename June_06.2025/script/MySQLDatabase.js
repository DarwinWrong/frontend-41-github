import { Database } from './Database.js';
export class MySQLDatabase extends Database {
  save(product) {
    console.log('Saved to MySQL:', product);
  }
}