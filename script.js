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

function addNewBook() {
  createForm();
}

function createForm() {
  const form = document.createElement("form");
  const titleForm = document.createElement("input");
  titleForm.setAttribute("type", "text");
  titleForm.setAttribute("value", "Title");
  form.appendChild(titleForm);
  const authorForm = document.createElement("input");
  authorForm.setAttribute('type', "text");
  authorForm.setAttribute('value', "Author");
  form.appendChild(authorForm);
  const pageNumForm = document.createElement("input");
  pageNumForm.setAttribute('type', "text");
  pageNumForm.setAttribute("value", "Pages");
  form.append(pageNumForm);
  const hasBeenRead = document.createElement("input");
  hasBeenRead.setAttribute("type", "checkbox");
  hasBeenRead.setAttribute("value", "Read?");
  
  const submitButton = document.createElement("button");
  submitButton.setAttribute("value", "Submit");
  submitButton.setAttribute("onclick", storeInputs());
  form.appendChild(hasBeenRead);
  document.body.appendChild(form);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    Object.values(book).forEach((val) => {
      const tableData = document.createElement("td");
      tableData.textContent = val;
      tableRow.appendChild(tableData);
    });
  });
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
displayBooks();

// console.log(theHobbit.info());
