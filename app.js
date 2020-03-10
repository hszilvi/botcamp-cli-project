const API = require("./lib/API");

const books = API.read("books");
console.log(books);

const book = API.read("books", 1);
console.log(book);

const newBook = {
  title: "Book about Ruby"
};

API.create("books", newBook);

API.update("books", {
  id: 1,
  title: "Good Book about Javascript"
});

API.destroy("books", 3);
