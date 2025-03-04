//! hasProerty()
/**
 * Description placeholder
 *
 * @type {{ name: string; age: number; }}
 */
var actor = {
  name: "Will",
  age: 25,
};
/**
 * Description placeholder
 *
 * @type {*}
 */
const hasName = actor?.hasOwnProperty("name");
console.log(hasName);
/**
 * Description placeholder
 *
 * @param {string} [propName=""]
 * @param {*} obj
 * @returns {boolean}
 */
function checkProp(propName = "", obj) {
  let resalt;
  propName in obj ? (resalt = true) : (resalt = false);
  return resalt;
}
console.log(checkProp("age", actor));
