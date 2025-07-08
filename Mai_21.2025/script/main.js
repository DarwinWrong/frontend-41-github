import { Rule } from './rule.js';
import { ConsoleLogger, AlertLogger, DomLogger } from './loggers.js';
import { Validator } from './validator.js';
import { Processor } from './processor.js';

const rules = [
  new Rule('username', 'Ім’я має містити від 5 до 15 літер.', val => /^[a-zA-Z]{5,15}$/.test(val)),
  new Rule('birthYear', 'Рік має бути від 1900 до поточного.', val => {
    const year = parseInt(val);
    return year >= 1900 && year <= new Date().getFullYear();
  }),
  new Rule('eyeColor', 'Колір очей некоректний.', val => ['brown', 'green', 'gray', 'blue'].includes(val)),
  new Rule('hairColor', 'Колір волосся некоректний.', val => ['black', 'brown', 'white', 'red', 'other'].includes(val)),
  new Rule('height', 'Зріст має бути від 0 до 2.60 м.', val => parseFloat(val) >= 0 && parseFloat(val) <= 2.6),
  new Rule('weight', 'Вага має бути від 0 до 300 кг.', val => parseFloat(val) >= 0 && parseFloat(val) <= 300)
];

const logger = new DomLogger('error-container');
const validator = new Validator(logger, rules);

const processor = new Processor(validator, (form) => {
  const result = document.getElementById('result');
  result.innerHTML = '<h3>Дані з форми:</h3>';
  const ul = document.createElement('ul');
  Array.from(form.elements).forEach(el => {
    if (el.name) {
      const li = document.createElement('li');
      li.textContent = `${el.name}: ${el.value}`;
      ul.appendChild(li);
    }
  });
  result.appendChild(ul);
});

processor.attach('#userForm');
