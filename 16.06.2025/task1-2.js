// function createBox(width, height) {
//     return {
//       width: width * 1.5,
//       height: height + 20,
//       borderRadius: 5,
//       shadow: `0 0 10px rgba(0, 0, 0, 0.5)`,
//       opacity: 0.8
//     };
//   }
//Магічні числа
// 1.5 - коефіцієнт для ширини
// 20 - додаткова висота
// 5 - радіус закруглення
// 10 - розмір тіні 
// 0.5 - прозорість тіні
// 0.8 - прозорість елемента

//Альтернатива
const WIDTH_SCALE_FACTOR = 1.5
const EXTRA_HEIGHT = 20
const BORDER_RADIUS = 5
const SHADOW_BLUR = 10
const SHADOW_OPACITY = 0.5
const BOX_OPACITY = 0.8

function createBox(width, height) {
    return {
      width: width * WIDTH_SCALE_FACTOR,
      height: height + EXTRA_HEIGHT,
      borderRadius: BORDER_RADIUS,
      shadow: `0 0 ${SHADOW_BLUR}px rgba(0, 0, 0, ${SHADOW_OPACITY})`,
      opacity: BOX_OPACITY
    };
  }