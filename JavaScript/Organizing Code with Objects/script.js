/*
1 — Build a book object:

Create an object that represents a book. It should hold data about the book and have a method that summarizes it.
Properties: title, author, pages, isRead (boolean)
Method getSummary() — returns a string like "Dune by Frank Herbert, 412 pages, read: true"
Method markAsRead() — sets isRead to true
*/

const book = {
  title: "Harry Potter and The Chamber of Secrets",
  author: "J.K. Rowling",
  pages: 546,
  isRead: true,
  getSummary(){
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.isRead}`;
    //Dune by Frank Herbert, 412 pages, read: true"
  },
  markAsRead(){
    isRead = true;
  }
}
console.log(book.getSummary());
/*
2 — Bank account
Build a simple bank account object that tracks a balance and supports deposits and withdrawals.
Properties: owner (string), balance (number, start at 0)
Method deposit(amount) — adds to balance, logs "Deposited $X. New balance: $Y"
Method withdraw(amount) — subtracts from balance, but logs "Insufficient funds" if amount exceeds balance
Method getBalance() — returns a string like "Ahmad's balance: $150"
*/

const bankAccount = {
  owner: "Yasin",
  balance: 0,
  deposit(amount){
    this.balance+=amount;
    return `Deposited $${amount}. New balance: $${this.balance}`;
  },
  withdraw(amount){
    if(amount > this.balance){
      console.log("Insufficient funds");
    }
    this.balance-=amount;
  },
  getBalance(){
    return `${this.owner}'s balance: $${this.balance}`;
  }
};
bankAccount.deposit(10000);
console.log(bankAccount.getBalance());

/*
3 — Shopping cart
Build a shopping cart object. The cart holds an array of items and has methods to manage them.
Property: items — starts as an empty array
Method addItem(name, price) — pushes { name, price } into items
Method removeItem(name) — removes the first item matching that name
Method getTotal() — returns the sum of all item prices
Method printReceipt() — logs each item and price, then logs the total
*/

const shoppingCart = {
  items: [],
  addItem(name, price){
    this.items.push({name, price});
  },
  removeItem(name){
    for(let i = this.items.length -1; i>=0; i--){ //always good practice to iterate backwards when modifying an array in place
      if(this.items[i].name === name){
        this.items.splice(i, 1);
      }
    }
  },
  getTotal(){
    let total =0;
    for(let i =0; i<this.items.length; i++){
      total+=this.items[i].price;
    }
    return total;
  },
  printReceipt(){
    for(let i =0; i<this.items.length; i++){
      console.log(this.items[i].name);
      console.log(this.items[i].price);
    }
    console.log(this.getTotal());
  }
}
shoppingCart.addItem("Pencil", .25);
shoppingCart.addItem("Composition Notebook", 9.50);
shoppingCart.removeItem("Pencil");
console.log(`Items include: ${shoppingCart.items}`);
shoppingCart.printReceipt();


/*
4 — Score tracker
Build a two-player score tracker object for any game. This one tests your ability to use this to manage state across multiple method calls.
Properties: playerOne and playerTwo — each an object with name and score: 0
Method awardPoint(playerName) — finds the right player by name and increments their score
Method getLeader() — returns the name of the player with the higher score, or "Tied!"
Method reset() — sets both scores back to 0
*/


const scoreTracker = {
  playerOne: {
    name: "Yasin",
    score: 0
  },
  playerTwo: {
    name: "Claude",
    score: 0
  },
  awardPoint(playerName){
    if(this.playerOne.name === playerName){
      this.playerOne.score++;
    }
    else if(this.playerTwo.name === playerName){
      this.playerTwo.score++;
    }
    else{
      console.log(`WARNING! Player: "${playerName}" not found`);
    }
  },
  getLeader(){
    if(this.playerOne.score > this.playerTwo.score){
      return this.playerOne.name;
    }
    else if(this.playerOne.score < this.playerTwo.score){
      return this.playerTwo.name;
    }
    else{
      return 'Tie!';
    }

  },
  reset(){
    this.playerOne.score = 0;
    this.playerTwo.score = 0;
  }
};

scoreTracker.awardPoint("Yasin");
console.log(scoreTracker.playerOne.score);
console.log(scoreTracker.getLeader());




/*
5 — Mini inventory system
Build an inventory manager object. This is the "objects managing objects" pattern from the lesson. 
Each item in the inventory is itself an object.
Property: items — empty array of item objects { name, quantity, price }
Method addItem(name, quantity, price)
Method restock(name, quantity) — finds item by name, adds to its quantity
Method sell(name, quantity) — reduces quantity, logs error if not enough stock
Method getInventoryValue() — returns total value (sum of each item's price × quantity)
Method getLowStock(threshold) — returns array of items with quantity below threshold
*/



const inventory = {
  items: [],
  addItem(name, quantity, price){
    this.items.push({name, quantity, price});
  },
  restock(name, quantity){
    let nameExists = false;
    for(let i =0; i <this.items.length; i++){
      if(this.items[i].name === name){
        this.items[i].quantity+=quantity;
        nameExists = true;
      }
    }
    if(nameExists === false){
      console.log(`WARNING: "${name}" not found in inventory`);
    }
  },
  sell(name, quantity){
    let nameExists = false;
    for(let i =0; i <this.items.length; i++){
      if(this.items[i].name === name){
        if(quantity > this.items[i].quantity){
          console.log("ERROR NOT ENOUGH STOCK");
          break
        }
        else{
        this.items[i].quantity-=quantity;
        nameExists = true;
        }
      }
    }
    if(nameExists === false){
      console.log(`WARNING: "${name}" not found in inventory`);
    }
  },
  getInventoryValue(){
    let totalValue = 0;
    for(let i =0; i<this.items.length; i++){
      totalValue+=this.items[i].price * this.items[i].quantity;
    }
    return totalValue;
  },
  getLowStock(threshold){
    let belowThresholdList = [];
    for(let i =0; i<this.items.length; i++){
      if(this.items[i].quantity < threshold){
        belowThresholdList.push(this.items[i]);
      }
    }
    return belowThresholdList;
  }
  
};

inventory.addItem("Diamond Sword", 20, 100);
inventory.addItem("Bronze Sword", 50, 25);
inventory.addItem("Gold Shield", 5, 500);

inventory.restock("Bronze Sword", 50);
inventory.sell("Diamond Sword", 5);

console.log(inventory.items);

console.log(inventory.getLowStock(75));

