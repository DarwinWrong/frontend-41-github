import { applySort, sortByPrice, sortByTitle, sortByDate, sortByType } from './SortStrategy.js';
import { TicketFacade } from './TicketFacade.js';
import { EventNotifier } from './EventNotify.js';
import { createTicketProxy } from './TicketProxy.js';

TicketFacade.loginUser({ name: "Olha", role: "user" }); // роль може бути 'user', 'admin', 'guest'

const events = [
    TicketFacade.createAndLogEvent("concert", "Image Dragone", "2025-06-22", 1200),
    TicketFacade.createAndLogEvent("theatre", "Gamlet", "2025-06-22", 800),
    TicketFacade.createAndLogEvent("exhibition", "Art Expo", "2025-07-10", 500)
];

const notifier = new EventNotifier();

notifier.subscribe(event => {
    alert(`New Event: ${event.title}`);
    renderEvent(events);
});

function renderEvent(eventList) {
    const container = document.getElementById('events-container');
    container.innerHTML = '';

    const userRole = TicketFacade.getUserRole ? TicketFacade.getUserRole() : 'guest';

    eventList.forEach(event => {
        const userTicket = createTicketProxy(event, userRole);
        const el = document.createElement('div');
        el.className = 'event';
        el.innerHTML = `
            <h3>${userTicket.title}</h3>
            <p>Дата: ${event.date}</p>
            <p>Ціна: ${userTicket.price}</p>
        `;

        // Кнопка купівлі
        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Купити';
        buyBtn.onclick = () => {
            TicketFacade.buyTicket(event);
            alert(`Квиток на "${event.title}" куплено!`);
        };

        // Кнопка повернення
        const returnBtn = document.createElement('button');
        returnBtn.textContent = 'Повернути';
        returnBtn.onclick = () => {
            TicketFacade.returnTicket(event);
            alert(`Квиток на "${event.title}" повернено!`);
        };

        el.appendChild(buyBtn);
        el.appendChild(returnBtn);
        container.appendChild(el);
    });
}

function sortEvent(criterion) {
    let sorted = [];
    switch (criterion) {
        case 'price':
            sorted = applySort(events, sortByPrice);
            break;
        case 'title':
            sorted = applySort(events, sortByTitle);
            break;
        case 'date':
            sorted = applySort(events, sortByDate);
            break;
        case 'type':
            sorted = applySort(events, sortByType);
            break;
        default:
            sorted = events;
    }
    renderEvent(sorted);
}

function addNewEvent() {
    const newEvent = TicketFacade.createAndLogEvent("concert", "Alan Walker", "2025-09-22", 1500);
    events.push(newEvent);
    notifier.notify(newEvent);
    renderEvent(events);
}

renderEvent(events);

window.sortEvent = sortEvent;
window.addNewEvent = addNewEvent;