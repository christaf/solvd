class Book {

    constructor(title, author, ISBN, price, availability = true) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.price = price;
        this.availability = availability;
    }

}

class User {

    constructor(name, email, userID) {
        this.name = name;
        this.email = email;
        this.userID = userID;
    }

}

class Cart {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (book.availability) {
            this.books.push(book);
            return `Book titled "${book.title}" added to cart.`;
        } else {
            return `Book titled "${book.title}" is not available.`;
        }
    }

    removeBook(ISBN) {
        const index = this.books.findIndex(book => book.ISBN === ISBN);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            return `Book titled "${removedBook.title}" removed from cart.`;
        } else {
            return `Book with ISBN "${ISBN}" not found in cart.`;
        }
    }

    calculateTotalPrice() {
        return this.books.reduce((total, book) => total += book.price, 0);
    }
}

class Order {
    constructor(user, books) {
        this.user = user;
        this.books = books;
        this.totalPrice = this.calculateTotalPrice();
    }

    calculateTotalPrice() {
        return this.books.reduce((total, book) => total += book.price, 0);
    }
}