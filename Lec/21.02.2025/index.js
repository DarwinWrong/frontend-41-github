// var student = new Object();
// student.name = "Nik";
// student.street = "dfhuhfhf";
// student["age"] = 25;
// console.log(student);
/**
 * Description placeholder
 *
 * @type {{ name: string; }}
 */
const developer = {
  name: "Вася",
};
/**
 * Description placeholder
 *
 * @param {*} obj
 * @param {*} key
 */
function find(obj, key) {
  if (key in obj) {
    console.log(
      `В об'єкті є властивість під назвою ${key} та має значення ${obj[key]}`
    );
  } else {
    console.log("В об'єкті немає такого властивість");
  }
}
find(developer, "name");
find(developer, "age");
