class Book {
    bookId;
    bookName;
    publicationYear;
    copies;
    status;

    constructor(bookId, bookName, publicationYear, copies) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.publicationYear = publicationYear;
        this.copies = copies;
        this.status = false;
    }

    borrowBook() {
        if (this.copies > 0) {
            this.copies--;
            this.status = this.copies > 0;
        } else {
            alert('Số quyển đã hết');
        }
    }
}

