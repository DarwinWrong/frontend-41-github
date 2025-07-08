export const createTicketProxy = (ticket, userRole) => {
    return new Proxy(ticket, {
        get(target, prop) {
            if (prop === 'price' && userRole !== 'admin') {
                console.warn('Price is hidden for non-admins');
                return 'Доступ обмежено';
            }
            if (prop === 'title' && userRole === 'guest') {
                return 'Приховано для гостей';
            }
            return target[prop];
        }
    });
};