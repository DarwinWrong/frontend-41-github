//Поганий приклад
// function calculateDiscount(price, quantity) {
//     const discount = price * quantity * 0.1
//     const bonusPoints = quantity * 5
//     const tax = price * 0.2
//     const finalPrice = price * quantity - discount + tax;
//     return {
//         finalPrice,
//         discount,
//         bonusPoints
//     }
// }

//Кращий приклад
const DISCOUNT_RATE = 0.1
const BONUS_PER_ITEM = 5
const TAX_RATE = 0.2

function calculateDiscount(price, quantity) {
    const discount = price * quantity * DISCOUNT_RATE
    const bonusPoints = quantity * BONUS_PER_ITEM
    const tax = price * quantity * TAX_RATE
    const finalPrice = price * quantity - discount + tax
    
    return {
        finalPrice,
        discount,
        bonusPoints
    }
}
