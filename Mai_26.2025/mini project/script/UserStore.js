export const UserStore = (() => {
    let user = null;
    let tickets = [];

    return {
        setUser(data) {
            user = data;
        },
        getUser() {
            return user;
        },
        buyTicket(event) {
            tickets.push(event);
        },
        getTickets() {
            return tickets;
        },
        returnTicket(event) {
            const index = tickets.indexOf(event);
            if (index !== -1) {
                tickets.splice(index, 1);
            }
        },
        resetTickets() {
            tickets = [];
        }
    };
})();