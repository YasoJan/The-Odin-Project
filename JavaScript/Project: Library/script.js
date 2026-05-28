/*
Project: Library
By: Yasin Zahir
*/

class Book {
  constructor(title, author, num_pages, read, id) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;
    this.id = id;
  }

  info() {
    return `Title: ${this.title}\nAuthor: ${this.author}\nNumber of pages: ${this.num_pages}\nRead or not: ${this.read}\nID: ${this.id}`;
  }
}

class Library {
  myLibrary = [];
  id = 0;
  submitButton = document.querySelector(".submit");
  bookTitle = document.querySelector(".title");
  author = document.querySelector(".author");
  numPages = document.querySelector(".num-pages");
  tableBody = document.querySelector("tbody");
  searchBar = document.querySelector(".searchBar");
  searchBook = document.querySelector(".search-book");
  addBook = document.querySelector(".add-book");
  title = document.querySelector(".title");
  dialog = document.querySelector(".modal");
  closeButton = document.querySelector(".close-button");
  searchModal = document.querySelector(".search-modal");
  closeButton2 = document.querySelector(".close-button2");

  // Read the active radio input value dynamically when called
  getReadValue() {
    const checkedRadio = document.querySelector('input[name="read"]:checked');
    return checkedRadio ? checkedRadio.value : "No";
  }

  addBookToLibrary(book) {
    this.myLibrary.push(book);
    this.renderBookRow(book); // Renders the row safely using the book object properties
  }

  // 1. RUNS ONCE AT STARTUP: Sets up the search button and modal open/close functionality
  initGlobalListeners() {
    this.searchBook.addEventListener("mouseenter", () => {
      this.searchBar.placeholder = "Search Library";
    });

    this.searchBook.addEventListener("click", () => {
      this.searchModal.showModal();
      for (let i = 0; i < this.myLibrary.length; i++) {
        if (
          this.myLibrary[i] &&
          this.myLibrary[i].title === this.searchBar.value
        ) {
          Library.highlight(this.searchBar.value);
        }
      }
    });

    this.closeButton2.addEventListener("click", () => {
      this.searchModal.close();
    });
  }

  // 2. RUNS PER BOOK: Generates the DOM HTML elements dynamically for individual entries
  renderBookRow(book) {
    const tableRow = document.createElement("tr");
    this.tableBody.appendChild(tableRow);

    const tableDataID = document.createElement("td");
    tableDataID.textContent = book.id;
    tableRow.appendChild(tableDataID);

    const tableDataTitle = document.createElement("td");
    tableDataTitle.textContent = book.title;
    tableRow.appendChild(tableDataTitle);

    const tableDataAuthor = document.createElement("td");
    tableDataAuthor.textContent = book.author;
    tableRow.appendChild(tableDataAuthor);

    const tableDataNumPages = document.createElement("td");
    tableDataNumPages.textContent = book.num_pages;
    tableRow.appendChild(tableDataNumPages);

    const tableDataReadBook = document.createElement("td");
    tableDataReadBook.textContent = book.read;
    tableRow.appendChild(tableDataReadBook);

    const tableDeleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    tableDeleteCell.appendChild(deleteButton);
    tableRow.appendChild(tableDeleteCell);

    deleteButton.addEventListener("click", () => {
      if (tableRow) {
        tableRow.remove();
      }
      // Keeps your data array in sync with your UI by filtering out this exact book ID
      this.myLibrary = this.myLibrary.filter((item) => item.id !== book.id);
    });

    const tableReadStatus = document.createElement("td");
    const readStatusButton = document.createElement("button");
    readStatusButton.textContent = "Toggle Read";
    tableReadStatus.appendChild(readStatusButton);
    tableRow.appendChild(tableReadStatus);

    readStatusButton.addEventListener("click", () => {
      if (book.read.toLowerCase() === "yes") {
        book.read = "no";
        tableDataReadBook.textContent = "no";
      } else {
        book.read = "yes";
        tableDataReadBook.textContent = "yes";
      }
    });
  }

  static highlight(title) {
    const targetTableBody = document.querySelector("tbody");
    if (!targetTableBody) return;

    for (let i = 0; i < targetTableBody.children.length; i++) {
      const row = targetTableBody.children[i];
      const rowTitle = row.children[1];

      for (let j = 0; j < row.children.length; j++) {
        row.children[j].classList.remove("highlight");
      }

      if (
        rowTitle &&
        rowTitle.textContent.trim().toLowerCase() === title.trim().toLowerCase()
      ) {
        for (let k = 0; k < row.children.length; k++) {
          row.children[k].classList.add("highlight");
        }
      }
    }
  }

  addBookPage() {
    this.addBook.addEventListener("mouseenter", () => {
      this.searchBar.placeholder = "Add to Library";
    });

    this.addBook.addEventListener("click", () => {
      this.dialog.showModal();
      this.title.value = this.searchBar.value;
    });

    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      let myBook = new Book(
        this.bookTitle.value,
        this.author.value,
        this.numPages.value,
        this.getReadValue(),
        this.id++,
      );
      this.addBookToLibrary(myBook);
      this.dialog.close();
    });

    this.closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.dialog.close();
    });
  }
}

// Global script initial execution
const library = new Library();
library.initGlobalListeners(); // Loops the search system up instantly on page load with zero data errors
library.addBookPage();
