function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return this.title + ' by ' + this.author + ' (' + this.year + ')';
};

function Ebook(title, author, year, fileSize) {
  Book.call(this, title, author, year);
  this.fileSize = fileSize;
}

Ebook.prototype = Object.create(Book.prototype);
Ebook.prototype.constructor = Ebook;

Ebook.prototype.getSummary = function () {
  var baseSummary = Book.prototype.getSummary.call(this);
  return baseSummary + ' [Ebook, File Size: ' + this.fileSize + 'MB]';
};

var library = [
  new Book('Roadside Picnic', 'Arkady and Boris Strugatsky', 1972),
  new Ebook('Digital Fortress', 'Dan Brown', 1998, 2.5),
  new Book('To Kill a Mockingbird', 'Harper Lee', 1960),
  new Ebook('The Martian', 'Andy Weir', 2011, 3.2),
];

library.forEach(function (item) {
  console.log(item.getSummary());
});
