// var student = new Object();
// student.name = "Nik";
// student.street = "dfhuhfhf";
// student["age"] = 25;
// console.log(student);
const developer = {
  name: "Вася",
};
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
