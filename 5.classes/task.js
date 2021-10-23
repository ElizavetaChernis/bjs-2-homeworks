class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
       return state = 1.5*this.state;
    }

    set state(state) {
        if (state < 0) {
             this._state = 0;   
        } else if (state > 100) {
            this._state = 100; 
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//2 задание

class Library {
    constructor (name) {
    this.name = name;
    this.books = [];
    }

    addBook(book) {
        if (state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find((book) => book[type] == value);
        if (!book) return null;
        return book;
    }

    giveBookByName(bookName) {
        let rightBook = this.books.find((book) => book.name === bookName);
       if (typeof rightBook === "object") {
            this.books.splice(this.books.indexOf(rightBook), 1);
            return rightBook;
       } else return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));

library.addBook(new Magazine("Мурзилка", 1919, 60));

let book = library.findBookBy("Мурзилка", 1919);
book = library.giveBookByName("Мурзилка");
book.state = 20;
book.state = 70;
library.addBook(book);
