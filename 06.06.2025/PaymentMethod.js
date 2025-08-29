class PaymentMethod{
    pay(amount) {
        throw new Error('Метод pay(amount) має бути реалізований')
    }
}

class ApplePay extends PaymentMethod{
    pay(amount) {
        console.log(`Оплачено ${amount} грн через Apple Pay`)
    }
}

class GooglePay extends PaymentMethod{
    pay(amount) {
        console.log(`Оплачено ${amount} грн через Google Pay`)
    }
}

export { PaymentMethod, ApplePay, GooglePay }