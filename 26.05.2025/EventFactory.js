class Concert{
    constructor(title, date, price) {
        this.type = 'concert'
        this.title = title;
        this.date = date;
        this.price = price;
    }

}

class Theatre{
    constructor(title, date, price) {
        this.type = 'Theatre'
        this.title = title;
        this.date = date;
        this.price = price;
    }

}

class Cinema {
    constructor(title, date, price) {
        this.type = 'cinema';
        this.title = title;
        this.date = date;
        this.price = price;
    }
}
export class EventFactory {
    static create(type, title, date, price) {
        switch (type) {
            case 'concert': return new Concert(title, date, price)
            case 'theatre': return new Theatre(title, date, price)
            case 'cinema': return new Cinema(title, date, price);
            default: throw new Error('Unknown event type')
        }
    }
}