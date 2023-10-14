export class Book {
  constructor(
    public bookId: string,
    public title: string,
    public author: string,
    public published: string,
    public publisher: string,
    public pages: number,
  ) {
    this.bookId = bookId;
    this.title = title;
    this.author = author;
    this.published = published;
    this.publisher = publisher;
    this.pages = pages;
  }
}
