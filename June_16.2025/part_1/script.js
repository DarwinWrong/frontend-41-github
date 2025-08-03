
// Аналіз легасі коду

// function createBox(width, height) {
//  return {
//  width: width * 1.5, // збільшує ширину бокса на 50%
//  height: height + 20, // збільшує висоту бокса на 20px
//  borderRadius: 5, // встановлює радіус закруглення кутів
//  shadow: `0 0 10px rgba(0, 0, 0, 0.5)`, // додає тінь
//  opacity: 0.8 // встановлює непрозорість
//  };
// }


// Рефакторинг коду
// const widthMultiplier = 1.5;     
// const heightAdd = 20;            
// const borderRadiusSize = 5;     
// const shadowBlurSize = 10;      
// const shadowOpacityValue = 0.5; 
// const boxOpacityValue = 0.8;    

// function createBox(width, height) {
//   return {
//     width: width * widthMultiplier,
//     height: height + heightAdd,
//     borderRadius: borderRadiusSize,
//     shadow: `0 0 ${shadowBlurSize}px rgba(0, 0, 0, ${shadowOpacityValue})`,
//     opacity: boxOpacityValue
//   };
// }