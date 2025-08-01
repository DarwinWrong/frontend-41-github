import { BookModel } from './model.js';
import { BookViews } from './view.js';
import { BookController } from './controller.js';

new BookController(new BookModel(), new BookViews());