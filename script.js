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

function addBookToLibray() {
  
}

function displayTableData(bookToDisplay){
  const 
}

function displayBooks() {
    myLibrary.forEach(book => {
      console.log(book);
        const tableRow = document.createElement("tr");
        table.appendChild(tableRow);
        for (const key in book) {
          console.log("key: " + key);
          console.log("book: " + book);
            const tableData = document.createElement("td");
            tableData.textContent = key.valueOf();
            tableRow.appendChild(tableData);
        }
      });
      
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    let bookInfo = `${title} by ${author}, ${pages} pages, ${isRead}`;
    return bookInfo;
  };
}
displayBooks();

// console.log(theHobbit.info());
