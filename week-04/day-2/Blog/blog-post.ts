'use strict'

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(author: string, title: string, content: string, date: string) {
    this.authorName = author;
    this.title = title;
    this.text = content;
    this.publicationDate = date;
  }
}

export { BlogPost };
