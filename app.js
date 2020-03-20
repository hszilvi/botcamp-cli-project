const API = require("./lib/API");
const readlineSync = require("readline-sync");

function averageRating(book) {
  let total = 0;
  for (const review of book.reviews) {
    total += parseInt(review.rating);
  }
  return total / book.reviews.length;
}

function displayBooks(books) {
  for (const book of books) {
    if (book.reviews.length > 0) {
      console.log(
        `--- ${book.id}: ${book.title}, rating: ${averageRating(book)}`
      );
    } else {
      console.log(`--- ${book.id}: ${book.title}, no reviews yet!`);
    }
  }
}

function displayBook(book) {
  console.log(`-- ${book.title} --`);
  for (const review of book.reviews) {
    console.log(`${review.content} - Rating: ${review.rating}`);
  }
}

function chooseABook(books) {
  for (const book of books) {
    console.log(`--- ${book.id}: ${book.title}`);
  }
  const bookChoice = readlineSync.question(
    "Which book would you like to review? "
  );
  const book = API.read("books", bookChoice);
  if (book !== undefined) {
    return book;
  } else {
    console.log("Ooops we can't find that book!");
    return chooseABook(books);
  }
}

function mainMenu() {
  console.log("----------------");
  console.log("---- AMAZON ----");
  console.log("----------------");
  console.log("1. View our books");
  console.log("2. Leave a review");
  console.log("----------------");

  const choice = readlineSync.question("Please choose an option ");

  if (choice === "1") {
    console.log("----------------");
    console.log("- ALL OUR BOOKS -");
    console.log("----------------");

    const books = API.read("books");
    displayBooks(books);
    mainMenu();
  } else if (choice === "2") {
    console.log("-----------------");
    console.log("- CHOOSE A BOOK -");
    console.log("-----------------");

    const books = API.read("books");
    const book = chooseABook(books);
    displayBook(book);
    const rating = readlineSync.question("What is your rating? ");
    const content = readlineSync.question("Please write your review ");
    book.reviews.push({
      rating: rating,
      content: content
    });

    API.update("books", book);

    console.log("----------------");
    console.log("Thanks for leaving a review!");
    console.log("----------------");

    mainMenu();
  } else {
    console.log("Sorry we didn't recognise that choice!");
    mainMenu();
  }
}

mainMenu();
