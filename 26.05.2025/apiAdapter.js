const oldApi = {
    getEvents: () => [{title: 'Concert A', date: '2023-10-01', price: 50},]
}
export const newApiAdapter = {
    fetchEvents: () => {
        const oldData = oldApi.getEvents();
        return oldData.map(e => ({
            ...e,
            isOld: true
        }))
    }
}