import { EventFactory } from "./EventFactory.js";
import { logger } from "./Logger.js";
import { UserStore } from "./UserStore.js";

export const TicketFacade = {
    createAndLogEvent(type, title, date, price){
        const event = EventFactory.create(type,title, date, price);
        logger.log(`Event created: ${event.type} - ${event.title} on ${event.date} for $${event.price}`);
        return event;
    },
    loginUser(userData) {
        UserStore.setUser(userData)
        logger.log(`User logged in: ${userData.name}`);
    },
    buyTicket(event) {
        UserStore.addTicket(event);
        logger.log(`Ticket bought: ${event.title} (${event.type}) for $${event.price}`);
    },
    
}

