import { TicketFacade } from "./TicketFacade.js";
import { applySort, sortByDate, sortByPrice, sortByTitle } from "./SortStrategy.js";
import { EventNotifier } from "./EventNotifier.js";
import { createTicketProxy } from "./ticketProxy.js";
import { logExecution } from "./decorators.js";
import { newApiAdapter } from "./apiAdapter.js";

TicketFacade.loginUser({ name: 'John Doe', role: 'user' })

const events = [
    TicketFacade.createAndLogEvent('concert', 'Imagine Dragon', '2025-01-01', '1200'),
    TicketFacade.createAndLogEvent('theatre', 'Gamlet', '2025-10-01', '800'),
    TicketFacade.createAndLogEvent('cinema', 'Avatar 3', '2025-05-01', '300'),
]

const notifier = new EventNotifier();
notifier.subscribe(event => alert('New event:' + event.title));

function renderEvents(eventList) {
    const container = document.getElementById('event-container');
    container.innerHTML = '';

    eventList.forEach(event => {
        const userTicket = createTicketProxy(event, 'user')
        const el = document.createElement('div')
        el.className = 'event'
        el.innerHTML = `
        <h3>${userTicket.title}</h3>
        <p>Дата: ${userTicket.date}</p>
        <p>Ціна: ${userTicket.price}</p>`
        container.appendChild(el);
    })
}

function addNewEvent() {
    const newEvent = TicketFacade.createAndLogEvent('concert', 'New event', '2025-07-01', '999')
    events.push(newEvent)
    notifier.notify(newEvent)
    renderEvents(events);
}

function sortEvents(criterion) {
    let sorted = []
    if(criterion === 'price') {
        sorted = applySort(events, sortByPrice)
    } else if (criterion === 'title') {
        sorted = applySort(events, sortByTitle)
    } else if(criterion === 'date'){
        sorted = applySort(events, sortByDate)
    }
    renderEvents(sorted);
}

renderEvents(events);
console.log('Старі події через адаптер:', newApiAdapter.fetchEvents(events));
window.addNewEvent = addNewEvent;
window.sortEvents = sortEvents;