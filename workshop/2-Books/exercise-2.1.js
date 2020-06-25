// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}

let book1 = new Book('The grand adventure', 'Action', 'Ben Davis', true);
let book2 = new Book('Mysteries of the universe', 'Informative', ['Ron Culbert', 'Cynthia Demerse'], true);
let book3 = new Book('Cook with Dani', 'Cooking', 'Daniel Delicious');
let book4 = new Book('How to create a black whole in your backyard', 'Informative', 'Cranky Joe');
let book5 = new Book('The heck?', 'heckling', 'Hecker Jr');

console.log(book1, book2, book3, book4, book5);
