class Concert {
    constructor(title, date, price) {
        this.type = 'concert';
        this.title = title;
        this.date = date;
        this.price = price;
    }
}

class Theatre {
    constructor(title, date, price) {
        this.type = 'theatre';
        this.title = title;
        this.date = date;
        this.price = price;
    }
}

class Exhibition {
    constructor(title, date, price) {
        this.type = 'exhibition';
        this.title = title;
        this.date = date;
        this.price = price;
    }
}

export class EventFactory {
    static create(type, title, date, price) {
        switch(type.toLowerCase()) {
            case 'concert': return new Concert(title, date, price);
            case 'theatre': return new Theatre(title, date, price);
            case 'exhibition': return new Exhibition(title, date, price);
            default: throw new Error('Unknown event type');
        }
    }
}