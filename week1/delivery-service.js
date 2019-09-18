class Restaurant {
    constructor(name, cusineStyle, phone) {
        this.name = name;
        this.cusineStyle = cusineStyle;
        this.phone = phone;
    }
}

class Order {
    constructor(items, paymentType, restaurant) {
        this.items = items;
        this.paymentType = paymentType;
        this.restaurant = restaurant;
    }
}

class Delivery {
    constructor(creationDate, order, address, phone) {
        this.creationDate = creationDate;
        this.order = order;
        this.address = address;
        this.phone = phone;
    }

    // Methods
    showStatus() {
        console.log('Delivery to ' + this.address + ' from ' + this.order.restaurant.name + ' is: ' + this.status);
    }
    setToProcessing() {
        this.status = 'processing';
        this.showStatus()
    }

    setToDelivered() {
        this.status = 'delivered';
        this.showStatus()
    }
}

// Instances or Objects
let amaretto = new Restaurant('Amaretto', 'italian', '077833221');
let taiPan = new Restaurant('Tai Pan', 'Chinese', '07763389856');
let gbkebab = new Restaurant('GB Kebab', 'Kebab', '07754356743');

let order1 = new Order(['2x Pizza margarita', '1x Lasagna'], 'Visa debit card', amaretto);
let order2 = new Order(['1x Special Rice, 1x Duck with vegetales, 1x Chicken Balls'], 'MasterCard Credit', taiPan);
let order3 = new Order(['2x Large mixed kebab', "1x Ben Jerry's chocolate fudge brownie"], 'Visa credit card', gbkebab);

let delivery1 = new Delivery('17/09/2019 17:32', order1, 'Lyon Road, Harrow, London, HA1 2EX', '07769890756');
let delivery2 = new Delivery('16/09/2019 18:20', order2, 'Axis Court, High Mead, Harrow, HA1 4LT', '07744750044');
let delivery3 = new Delivery('15/09/2019 20:15', order3, '28 Elm Avenue Ruislip, HA4 8PD', '07767771527');


// Interactions
delivery1.setToProcessing();
delivery1.setToDelivered();