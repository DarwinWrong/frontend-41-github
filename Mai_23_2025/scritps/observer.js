class NewsAgency {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriberFn) {
    this.subscribers.push(subscriberFn);
  }

  unsubscribe(subscriberFn) {
    this.subscribers = this.subscribers.filter(fn => fn !== subscriberFn);
  }

  publish(news) {
    this.subscribers.forEach(fn => fn(news));
  }
}

export { NewsAgency };