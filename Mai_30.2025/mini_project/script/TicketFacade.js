import { EventFactory } from "./EventFactory.js";
import { logger } from "./Loggers.js";
import { UserStore } from "./UserStore.js";

export const TicketFacade = {
    createAndLogEvent(type, title, date, price) {
        const event = EventFactory.create(type, title, date, price);
        logger.log(`Створено подію ${event.title}`);
        return event;
    },

    loginUser(userData) {
        UserStore.setUser(userData);
        logger.log(`Користувач ${userData.name} увійшов`);
    },

    buyTicket(event) {
        UserStore.buyTicket(event);
        logger.log(`Користувач купив квиток на ${event.title}`);
    },

    returnTicket(event) {
        UserStore.returnTicket(event);
        logger.log(`Користувач повернув квиток на ${event.title}`);
    }
};