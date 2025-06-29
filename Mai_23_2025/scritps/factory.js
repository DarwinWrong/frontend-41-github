class News {
  constructor(title, category) {
    this.title = title;
    this.category = category;
  }

  display() {
    return `${this.category.toUpperCase()}: ${this.title}`;
  }
}

class NewsFactory {
  createNews(title, category) {
    return new News(title, category);
  }
}

export { NewsFactory };