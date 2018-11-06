'use strict';
export {};

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

function correctingURL (wrongURL: string): string {
  let url2: string = url.replace("bots", "odds");
  let url3: string = url2.replace("https", "https:");
  return url3;
}

url = correctingURL(url);

console.log(url);