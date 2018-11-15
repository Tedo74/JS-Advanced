class BookCollection {
    constructor(genre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = genre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get shelfCondition() {
        return Math.max(0, this.shelfCapacity - this.shelf.length);
    }

    get room() {
        return this._room;
    }

    set room(value) {
        let allowed = ['livingRoom', 'bedRoom', 'closet'];
        if (!allowed.includes(value.trim())) {
            throw new Error(`Cannot have book shelf in ${value}`);
        }
        this._room = value;
    }

    addBook(bookName, bookAuthor, genre) {
        let book = {bookName, bookAuthor, genre};
        if (this.shelfCondition > 0) {
            this.shelf.push(book);
        } else if (this.shelfCondition === 0) {
            this.shelf.shift();
            this.shelf.push(book);
        }
        this.shelf.sort((a, b) => {
            return a.bookAuthor.localeCompare(b.bookAuthor);
        });
        return this;
    }

    throwAwayBook(nameOfBook) {
        this.shelf = this.shelf.filter(book => {
            return book.bookName !== nameOfBook;
        });
    }

    showBooks(genre) {
        let result = `Results for search \"${genre}\":\n`;
        let booksByGenre = this.shelf.filter(book => {
            return book.genre === genre;
        });
        booksByGenre.forEach((b) => {
            result += `\uD83D\uDCD6 ${b.bookAuthor} - \"${b.bookName}\"\n`;
        });
            return result.trim();
    }

    toString() {
        if (this.shelf.length === 0) {
            return 'It\'s an empty shelf';
        } else {
            let result = `\"${this.shelfGenre}\" shelf in ${this.room} contains:\n`
            this.shelf.forEach((b) => {
                result += `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}\n`;
            });
                return result.trim();
        }
    }
}

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//     .addBook("Introduction to Programming with C#", "Svetlin Nakov")
//     .addBook("Introduction to Programming with Java", "Svetlin Nakov")
//     .addBook("Programming for .NET Framework", "Svetlin Nakov");
// console.log(livingRoom.toString());

//let garden = new BookCollection("Programming", "garden");
let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
//console.log("Shelf's capacity: " + bedRoom.shelfCondition);
//console.log(bedRoom.showBooks("history"));
//bedRoom.throwAwayBook('The Guns of August');
//bedRoom.throwAwayBook('Atlas of Remote Islands');
console.log(bedRoom.toString());



