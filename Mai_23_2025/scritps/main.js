import { NewsFactory } from './factory.js';
import { NewsAgency } from './observer.js';

const factory = new NewsFactory();
const agency = new NewsAgency();

const sportsSubscriber = news => {
  if (news.category === 'sports') {
    console.log("Спорт:", news.display());
  }
};

const techSubscriber = news => {
  if (news.category === 'tech') {
    console.log("Тех:", news.display());
  }
};


agency.subscribe(sportsSubscriber);
agency.subscribe(techSubscriber);

const n1 = factory.createNews("Україна виграла матч!", "sports");
const n2 = factory.createNews("Новий JavaScript фреймворк", "tech");

agency.publish(n1);
agency.publish(n2);