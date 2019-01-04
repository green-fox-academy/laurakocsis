const method = 'GET';
const url = '/books';

const newxhrRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open(method, url);
  xhr.send();
}

const bookData = (data) => {
  const books = document.querySelector('.bookTable');
  const tr = document.createElement('tr');
  const thTitle = document.createElement('th');
  const thAuthor = document.createElement('th');
  const thCategory = document.createElement('th');
  const thPublisher = document.createElement('th');
  const thPrice = document.createElement('th');
  thTitle.textContent = 'Book Title';
  thAuthor.textContent = 'Author';
  thCategory.textContent = 'Category';
  thPublisher.textContent = 'Publisher';
  thPrice.textContent = 'Price';
  tr.appendChild(thTitle);
  tr.appendChild(thAuthor);
  tr.appendChild(thCategory);
  tr.appendChild(thPublisher);
  tr.appendChild(thPrice);
  books.appendChild(tr);
  data.forEach(e => {
    const trRow = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdCategory = document.createElement('td');
    const tdPublisher = document.createElement('td');
    const tdPrice = document.createElement('td');
    tdTitle.textContent = e.book_name;
    tdAuthor.textContent = e.aut_name;
    tdCategory.textContent = e.cate_descrip;
    tdPublisher.textContent = e.pub_name;
    tdPrice.textContent = e.book_price;
    trRow.appendChild(tdTitle);
    trRow.appendChild(tdAuthor);
    trRow.appendChild(tdCategory);
    trRow.appendChild(tdPublisher);
    trRow.appendChild(tdPrice);
    books.appendChild(trRow);
  });
}

const categoryList = [];
const publisherList = [];
const categoryfilter = document.querySelector('#categoryfilter');
const publisherfilter = document.querySelector('#publisherfilter');

const createFilters = (data) => {
  data.forEach(e => {
    if (!categoryList.includes(e.cate_descrip)) {
      categoryList.push(e.cate_descrip);
    }
    if (!publisherList.includes(e.pub_name)) {
      publisherList.push(e.pub_name);
    }
  });
  addOptions(categoryfilter, categoryList);
  addOptions(publisherfilter, publisherList);
}

const addOptions = (htmlElement, filterArray) => {
  filterArray.forEach(e => {
    const option = document.createElement('option');
    option.textContent = e;
    htmlElement.appendChild(option);
  });
}

newxhrRequest(method, url, bookData);
newxhrRequest(method, url, createFilters);

categoryfilter.addEventListener('change', (e) => {
  const { value } = e.target;
  console.log(value);
})