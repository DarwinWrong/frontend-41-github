const oldAPI = {
    getEvents: () => [{ title: 'Old concert', price: 300, date: '2025-05-31' }]
};

export const newAPTAdapter = {
    fetchEvent: () => {
        const oldData = oldAPI.getEvents();
        return oldData[0];
    }
};