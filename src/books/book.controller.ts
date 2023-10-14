import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.model';

@Controller('/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks(): any {
    return this.bookService.getBooks();
  }

  @Get('/:bookId')
  getBook(@Param('bookId') bookId: string): any {
    return this.bookService.getBook(bookId);
  }

  @Post()
  addBook(
    @Body('bookId') bookId: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('published') published: string,
    @Body('publisher') publisher: string,
    @Body('pages') pages: number,
  ): any {
    const newBook = new Book(
      bookId,
      title,
      author,
      published,
      publisher,
      pages,
    );
    return this.bookService.addBook(newBook);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string): any {
    return this.bookService.deleteBook(bookId);
  }

  @Put(':bookId')
  updateBook(
    @Param('bookId') bookId: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('published') published: string,
    @Body('publisher') publisher: string,
    @Body('pages') pages: number,
  ): any {
    const newBook = new Book(
      bookId,
      title,
      author,
      published,
      publisher,
      pages,
    );
    return this.bookService.updateBook(bookId, newBook);
  }
}
