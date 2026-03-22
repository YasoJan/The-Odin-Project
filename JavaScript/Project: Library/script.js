/*
Project: Library
By: Yasin Zahir
*/

const myLibrary = [];
let id = 0;
const submitButton = document.querySelector(".submit");
const bookTitle = document.querySelector(".title");
const author = document.querySelector(".author");
const numPages = document.querySelector(".num-pages");
const read = document.querySelector('input[name="read"]:checked');
let readValue;
const tableBody = document.querySelector("tbody");

const searchBar = document.querySelector(".searchBar");
const searchBook = document.querySelector(".search-book");
const addBook = document.querySelector(".add-book");
const title = document.querySelector(".title");
const dialog = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const searchModal = document.querySelector(".search-modal");
const closeButton2 = document.querySelector(".close-button2");

function Book(title, author, num_pages, read){
  this.title = title;
  this.author = author;
  this.num_pages = num_pages;
  this.read = read;
  this.id = id
  this.info = function (){
    return `Title: ${this.title}\nAuthor: ${this.author}\nNumber of pages: ${this.num_pages}\nRead or not: ${this.read}\nID: ${this.id}`;
  }
  id+=1;
}

function addBookToLibrary(book){
  myLibrary.push(book);
  displayBook(book);
}

function displayBook(book){

  const tableRow = document.createElement("tr");
  tableBody.appendChild(tableRow)
  
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
  tableDeleteCell.appendChild(deleteButton);
  tableRow.appendChild(tableDeleteCell);

  deleteButton.addEventListener("click", function(){
    while(tableRow.firstChild){
      tableRow.removeChild(tableRow.firstChild);
    }
    myLibrary.splice(book.id, 1);
  });

  const tableReadStatus = document.createElement("td");
  const readStatusButton = document.createElement("button");
  tableReadStatus.appendChild(readStatusButton);
  tableRow.appendChild(tableReadStatus);

  readStatusButton.addEventListener("click", function(){
    if(book.read.toLowerCase() == "yes"){
      book.read = "no";
      tableDataReadBook.textContent = "no"
    }
    else if(book.read.toLowerCase() == "no"){
      book.read = "yes";
      tableDataReadBook.textContent = "yes";
    }
    
  });
}

searchBook.addEventListener("mouseenter", function (){
  searchBar.placeholder = "Search Library"
});

addBook.addEventListener("mouseenter", function (){
  searchBar.placeholder = "Add to Library"
});

addBook.addEventListener("click", function (){
  dialog.showModal();
  title.value = searchBar.value;
});

closeButton.addEventListener("click", function(event){
  event.preventDefault();
  dialog.close();
});

if(read){
  readValue = read.value
} 
else{
  readValue = "No";
}
submitButton.addEventListener("click", function(event){
  event.preventDefault();
  let book = new Book(bookTitle.value, author.value, numPages.value, readValue);
  addBookToLibrary(book);
});

searchBook.addEventListener("click", function(){
  searchModal.showModal();
  for(let i = 0; i<myLibrary.length; i++){
    if(myLibrary[i].title == searchBar.value){
      highlight(searchBar.value);

    }
  }
  function highlight(title){
    for(let i = 0; i<tableBody.children.length; i++){
      const row = tableBody.children[i];
      const rowTitle = row.children[1]; //second title cell
      for(let i =0; i<row.children.length; i++){
        row.children[i].classList.remove("highlight");
      }
      if(rowTitle.textContent.trim().toLowerCase() === title.trim().toLowerCase()){
        for(let i =0; i<row.children.length; i++){
          row.children[i].classList.add("highlight");
        }
      }
    }
  }
});

closeButton2.addEventListener("click", function(){
  searchModal.close();
});


