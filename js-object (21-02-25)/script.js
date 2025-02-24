let character = {
    name: "John Doe",
    age: 35,
    profession: "Detective",
    mysterySolved: true
};

function displayNameAge(obj) {
    console.log("Name: " + obj.name + ", Age: " + obj.age);
}

console.log("Displaying character name and age:");
displayNameAge(character);

delete character.mysterySolved;
console.log("After deleting 'mysterySolved':", character);

if (!("mysterySolved" in character)) {
    console.log("Property 'mysterySolved' has been successfully removed.");
} else {
    console.log("Property 'mysterySolved' still exists.");
}

function checkProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        console.log("Property '" + prop + "' exists in the object.");
    } else {
        console.log("Property '" + prop + "' does not exist in the object.");
    }
}

console.log("Checking for the existence of property 'age':");
checkProperty(character, "age");

let childCharacter = Object.create(character);
childCharacter.rank = "Sergeant";
childCharacter.badgeNumber = 12345;

console.log("New object (childCharacter) inheriting from character with new properties:");
console.log("Inherited Name: " + childCharacter.name +
    ", Rank: " + childCharacter.rank +
    ", Badge Number: " + childCharacter.badgeNumber);

function printAllProperties(obj) {
    console.log("Printing all properties of the object:");
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key] + " (own property)");
        } else {
            console.log(key + ": " + obj[key] + " (inherited property)");
        }
    }
}

printAllProperties(childCharacter);

let charactersArray = ["John", "Sarah", "Michael", "Anna"];

function printSecondAndFourth(arr) {
    console.log("The second character is: " + arr[1]);
    console.log("The fourth character is: " + arr[3]);
}

printSecondAndFourth(charactersArray);

function printInvestigationParticipants(arr) {
    console.log("Participants in the investigation:");
    for (let name of arr) {
        console.log("Character " + name + " is participating in the investigation.");
    }
}

printInvestigationParticipants(charactersArray);

let detective = {
    name: "Detective Jane",
    age: 32,
    printDetails: function () {
        console.log("Detective Details: " + this.name + ", Age: " + this.age);
    }
};

detective.printDetails();

let baseCharacter = {
    name: "Base Detective",
    age: 45,
    role: "Investigator"
};

let inheritedCharacter = Object.create(baseCharacter);
inheritedCharacter.department = "Homicide";

console.log("Inherited Character properties:");
printAllProperties(inheritedCharacter);
