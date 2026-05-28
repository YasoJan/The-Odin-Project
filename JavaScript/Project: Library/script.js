/*
Project: Library
By: Yasin Zahir
*/

class Library {
  myLibrary = [];
  id = 0;
  submitButton = document.querySelector(".submit");
  bookTitle = document.querySelector(".title");
  author = document.querySelector(".author");
  numPages = document.querySelector(".num-pages");
  read = document.querySelector('input[name="read"]:checked');
  readValue;
  tableBody = document.querySelector("tbody");
  searchBar = document.querySelector(".searchBar");
  searchBook = document.querySelector(".search-book");
  addBook = document.querySelector(".add-book");
  title = document.querySelector(".title");
  dialog = document.querySelector(".modal");
  closeButton = document.querySelector(".close-button");
  searchModal = document.querySelector(".search-modal");
  closeButton2 = document.querySelector(".close-button2");

  Book(title, author, num_pages, read) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;
    this.info = function () {
      return `Title: ${this.title}\nAuthor: ${this.author}\nNumber of pages: ${this.num_pages}\nRead or not: ${this.read}\nID: ${this.id}`;
    };
    this.id += 1;
  }

  addBookToLibrary(book) {
    this.myLibrary.push(book);
    this.displayBook(book);
  }

  displayBook(book) {
    const tableRow = document.createElement("tr");
    this.tableBody.appendChild(tableRow);

    const tableDataID = document.createElement("td");
    tableDataID.textContent = this.id;
    tableRow.appendChild(tableDataID);

    const tableDataTitle = document.createElement("td");
    tableDataTitle.textContent = this.title;
    tableRow.appendChild(tableDataTitle);

    const tableDataAuthor = document.createElement("td");
    tableDataAuthor.textContent = this.author;
    tableRow.appendChild(tableDataAuthor);

    const tableDataNumPages = document.createElement("td");
    tableDataNumPages.textContent = this.num_pages;
    tableRow.appendChild(tableDataNumPages);

    const tableDataReadBook = document.createElement("td");
    tableDataReadBook.textContent = this.read;
    tableRow.appendChild(tableDataReadBook);

    const tableDeleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    tableDeleteCell.appendChild(deleteButton);
    tableRow.appendChild(tableDeleteCell);

    deleteButton.addEventListener("click", function () {
      while (tableRow.firstChild) {
        tableRow.removeChild(tableRow.firstChild);
      }
      this.myLibrary.splice(this.id, 1);
    });

    const tableReadStatus = document.createElement("td");
    const readStatusButton = document.createElement("button");
    tableReadStatus.appendChild(readStatusButton);
    tableRow.appendChild(tableReadStatus);

    readStatusButton.addEventListener("click", () => {
      if (this.read.toLowerCase() == "yes") {
        this.read = "no";
        tableDataReadBook.textContent = "no";
      } else if (this.read.toLowerCase() == "no") {
        this.read = "yes";
        tableDataReadBook.textContent = "yes";
      }
    });

    this.searchBook.addEventListener("mouseenter", () => {
      this.searchBar.placeholder = "Search Library";
    });

    this.addBook.addEventListener("mouseenter", () => {
      this.searchBar.placeholder = "Add to Library";
    });

    this.addBook.addEventListener("click", () => {
      this.dialog.showModal();
      this.title.value = this.searchBar.value;
    });

    this.closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.dialog.close();
    });

    if (this.read) {
      this.readValue = this.read.value;
    } else {
      this.readValue = "No";
    }
    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      let myBook = this.Book(
        this.bookTitle.value,
        this.author.value,
        this.numPages.value,
        this.readValue,
      );
      this.addBookToLibrary(myBook);
      this.dialog.close();
    });

    this.searchBook.addEventListener("click", () => {
      this.searchModal.showModal();
      for (let i = 1; i < this.myLibrary.length; i++) {
        if (this.myLibrary[i].title == searchBar.value) {
          this.highlight(this.searchBar.value);
        }
      }
    });

    function highlight(title) {
      for (let i = 0; i < this.tableBody.children.length; i++) {
        const row = this.tableBody.children[i];
        const rowTitle = row.children[1]; //second title cell
        for (let i = 0; i < row.children.length; i++) {
          row.children[i].classList.remove("highlight");
        }
        if (
          rowTitle.textContent.trim().toLowerCase() ===
          title.trim().toLowerCase()
        ) {
          for (let i = 0; i < row.children.length; i++) {
            row.children[i].classList.add("highlight");
          }
        }
      }
    }
    this.closeButton2.addEventListener("click", () => {
      searchModal.close();
    });
  }
}

library = new Library();
library.displayBook();
