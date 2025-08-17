export const UserStore = (() => {
    let user = null
    let tickets = []
    return {
        setUser(data) {
            user = data
        },
        getUser(){
            return user
        },
        addTicket(ticket) {
            if (!user) {
                console.error('Неможливо додати квиток: користувач не авторизований');
                return
            }
            tickets.push(ticket)
        },
        getTickets() {
            return [...tickets]
        },
        clearTickets() {
            tickets = []
        }
    }
})()