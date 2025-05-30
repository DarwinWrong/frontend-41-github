import { EventFactory } from "./EventFactory";
import { Logger } from "./Logger";
import { UserStore } from "./UserStore";

export const TicketFacade = {
    createAndLogEvent(type, title, date, price){
        const event = EventFactory.create(type, title, date, price);
        Logger.log(`Created event ${event.title}`)
        return event
    },
    loginUser(userData){
        UserStore.setUser(userData);
        Logger.log(`User ${userData.name} loggined`)
    },
    buyTicket(user, event)
    {
        user.buyTicket(event);
        Logger.log(`User ${user.name} bought ticket for ${event.title}`);
    },
    returnTicket(user, event)
    {
        user.returnTicket(event);
        Logger.log(`User ${user.name} returned ticket for ${event.title}`);
    }
}