import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Book } from './book.model';
import { log } from 'console';

@Injectable()
export class BookService {
  private books: Array<Book> = [];

  constructor() {
    const filePath = 'F:/Developpement Web/Nest.js/biblio/src/data/books.json';

    const tempData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    this.books = tempData.books;
  }

  getBooks(): Book[] {
    return this.books;
  }
  getBook(bookId: string): Book {
    return this.books.find((book) => book.bookId === bookId);
  }

  addBook(book: Book) {
    console.log(Array.isArray(this.books));

    this.books.push(book);
    return this.books;
  }

  deleteBook(bookId: string) {
    const bookIndex = this.books.findIndex((book) => book.bookId === bookId);

    if (bookIndex >= 0) {
      this.books.splice(bookIndex, 1);
    }
    return this.books;
  }

  updateBook(bookId: string, newBook: Book) {
    const book = this.books.find((book) => book.bookId === bookId);
    if (book !== undefined) {
      book.title = newBook.title;
      book.author = newBook.author;
      book.published = newBook.published;
      book.publisher = newBook.publisher;
      book.pages = newBook.pages;
      return book;
    }
  }
}
