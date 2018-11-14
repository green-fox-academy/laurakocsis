'use strict'
import { BlogPost } from "./blog-post"

class Blog {
  blogPosts: BlogPost[];

  constructor() {
    this.blogPosts = [];
  }

  addPost(newPost: BlogPost) {
    this.blogPosts.push(newPost);
  }

  delete(index: number) {
    this.blogPosts.splice(index, 1);
  }

  update(index: number, updatedPost: BlogPost) {
    this.blogPosts.splice(index, 1, updatedPost);
  }
}

export { Blog };
