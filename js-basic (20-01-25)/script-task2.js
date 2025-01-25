alert("Welcome to the interactive script!");

const userName = prompt("What is your name?");
console.log("User's Name:", userName);

const isConfirmed = confirm("Do you want to proceed?");
console.log("User Confirmation:", isConfirmed);

const book = {
  title: "Roadside Picnic",
  author: "Arkady and Boris Strugatsky",
  year: 1972,
  genre: "Science Fiction"
};

console.log("Book Details:");
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Year:", book.year);
console.log("Genre:", book.genre);

const colors = ["Red", "Green", "Purple", "Blue", "Cyan"];

console.log("First Color:", colors[0]);
console.log("Last Color:", colors[colors.length - 1]);
