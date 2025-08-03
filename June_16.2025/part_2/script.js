
// Легасі код

// function calculatePrice(originalPrice) {
//   let discount = 0;
  
//   if (originalPrice > 100) {
//     discount = 10; 
//   } else if (originalPrice > 50) {
//     discount = 5; 
//   }

//   let finalPrice = originalPrice - discount; 
//   return finalPrice;
// }


// Рефакторинг коду

// const discountThreshold1 = 100; 
// const discountThreshold2 = 50; 
// const discountAmount1 = 10; 
// const discountAmount2 = 5;

// function calculatePrice(originalPrice) {
//   let discount = 0;

//   if (originalPrice > discountThreshold1) {
//     discount = discountAmount1;
//   } else if (originalPrice > discountThreshold2) {
//     discount = discountAmount2;
//   }

//   let finalPrice = originalPrice - discount;
//   return finalPrice;
// }
