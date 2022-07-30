const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  295,
  "not yet read."
);
const prideAndPredjudice = new Book(
  "Pride and Prejudice",
  "Jane Austen",
  432,
  "not yet read."
);
const crimeAndPunishment = new Book(
  "Crime and Punishment",
  "Fyodor Dostoyevski",
  573,
  "not yet read."
);
const salemsLot = new Book("Salem's Lot", "Stephan King", 325, "Read");
const cloudAtlas = new Book("Cloud Atlas", "David Mitchell", 453, "Read");

const table = document.querySelector("#table");

let myLibrary = [
  theHobbit,
  prideAndPredjudice,
  crimeAndPunishment,
  salemsLot,
  cloudAtlas,
];

function addBookToLibray() {}

function displayBooks() {
  myLibrary.forEach((book) => {
    console.log("Book: " + book);
    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    Object.values(book).forEach((val) => {
      console.log("book: " + book + "val: " + book.val);
      const tableData = document.createElement("td");
      tableData.textContent = val;
      tableRow.appendChild(tableData);
    });
  }
)};

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
displayBooks();

// console.log(theHobbit.info());
