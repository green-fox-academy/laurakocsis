'use strict'
import { BlogPost } from "./blog-post"
import { Blog } from "./blog"

let superBlog = new Blog;

let blog1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let blog2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let blog3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');
let blog4 = new BlogPost('Arthur Author', 'The Post of Arthur the author', 'I am Arthur, the author of this blog post.', '2009.09.09');

superBlog.addPost(blog1);
superBlog.addPost(blog2);
superBlog.addPost(blog3);

console.log(superBlog);

superBlog.delete(1);

console.log(superBlog);

superBlog.update(1, blog4);

console.log(superBlog);
