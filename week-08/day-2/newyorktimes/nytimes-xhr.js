const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const nyApiKey = '340f8bea380f4ec491d18adc8bd10e5e';
const articleRequest = new XMLHttpRequest;
const articles = document.querySelector('.articles');

articleRequest.onreadystatechange = () => {
  if (articleRequest.readyState === XMLHttpRequest.DONE) {
    if (articleRequest.status === 200) {
      const response = JSON.parse(articleRequest.responseText);
      console.log(response);
      response.response.docs.forEach(e => {
        const newArticle = document.createElement('div');
        const newHeader = document.createElement('h1');
        newHeader.textContent = e.headline.main;
        const newSnippet = document.createElement('h3');
        newSnippet.textContent = e.snippet;
        const newDate = document.createElement('p');
        newDate.textContent = e.pub_date.slice(0, 10);
        const newLink = document.createElement('a');
        newLink.setAttribute('href', e.web_url);
        newLink.textContent = 'Read article';
        articles.appendChild(newArticle);
        newArticle.appendChild(newHeader);
        newArticle.appendChild(newSnippet);
        newArticle.appendChild(newDate);
        newArticle.appendChild(newLink);
      });
    }
  }
}

articleRequest.open('GET', `${url}?api-key=${nyApiKey}&q=apollo+11`);
articleRequest.send();