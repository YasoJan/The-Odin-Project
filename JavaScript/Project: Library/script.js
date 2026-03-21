/*
Project: Library
By: Yasin Zahir
*/

const myLibrary = [];
let id = 0;

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
// Sample inputs
/*
const hp_poa = new Book("Harry Potter & The Prisoner of Azkaban", "J.K. Rowling", "504", true);
addBookToLibrary(hp_poa);

const hp_cos = new Book("Harry Potter & The Chamber of Secrets", "J.K. Rowling", "389", true);
addBookToLibrary(hp_cos);
*/
function addBookToLibrary(book) {
  // take params, create a book then store it in the array
  myLibrary.push(book);
}

//displayBook();
// Write a function that loops through the array and displays each book on the page. 
// You can display them in some sort of table, or each on their own “card”. 
// It might help for now to manually add a few books to your array so you can see the display.


function displayBook(){
  for(let i =0; i<myLibrary.length; i++){
    alert(myLibrary[i].title);
  }
}

const searchBar = document.querySelector(".searchBar");

const searchBook = document.querySelector(".search-book");
if(searchBook.addEventListener("mouseenter", function (){
  searchBar.placeholder = "Search Library"
}));

const addBook = document.querySelector(".add-book");

addBook.addEventListener("mouseenter", function (){
  searchBar.placeholder = "Add to Library"
});

const title = document.querySelector(".title");
const dialog = document.querySelector(".modal");
addBook.addEventListener("click", function (){
  dialog.showModal();
  title.value = searchBar.value;
});

const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", function(event){
  event.preventDefault();
  dialog.close();
});

const submitButton = document.querySelector(".submit");
const bookTitle = document.querySelector(".title");
const author = document.querySelector(".author");
const numPages = document.querySelector(".num-pages");
const read = document.querySelector('input[name="read"]:checked');
let readValue;
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
  displayBook();
});

searchBook.addEventListener("click", function(){
  displayBook();
});

