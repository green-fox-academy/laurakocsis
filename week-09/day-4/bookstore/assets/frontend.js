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

const books = document.querySelector('.bookTable');
const bookData = (data) => {
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
const pricelabel = document.querySelector('#pricelabel');

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
  const all = document.createElement('option');
  all.textContent = 'All';
  htmlElement.appendChild(all);
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
  if (publisherfilter.value !== 'default' && publisherfilter.value !== 'All') {
    if (value === 'All') {
      books.innerHTML = '';
      newxhrRequest(method, url.concat(`?publisher=${publisherfilter.value}`), bookData);
    } else {
      books.innerHTML = '';
      newxhrRequest(method, url.concat(`?publisher=${publisherfilter.value}&category=${value}`), bookData);
    }
  } else {
    if (value === 'All') {
      books.innerHTML = '';
      newxhrRequest(method, url, bookData);
    } else {
      books.innerHTML = '';
      newxhrRequest(method, url.concat(`?category=${value}`), bookData);
    }
  }
});

publisherfilter.addEventListener('change', (e) => {
  const { value } = e.target;
  if (categoryfilter.value !== 'default' && categoryfilter.value !== 'All') {
    if (value === 'All') {
      books.innerHTML = '';
      newxhrRequest(method, url.concat(`?category=${categoryfilter.value}`), bookData);
    } else {
      books.innerHTML = '';
      newxhrRequest(method, url.concat(`?publisher=${value}&category=${categoryfilter.value}`), bookData);
    }
  } else {
    if (value === 'All') {
      books.innerHTML = '';
      newxhrRequest(method, url, bookData);
    } else {
      books.innerHTML = '';
      newxhrRequest(method, url.concat(`?publisher=${value}`), bookData);
    }
  }
});

const pricerange = document.querySelector('#pricerange');


pricerange.addEventListener('change', (e) => {
  const { valueAsNumber } = e.target;
  pricelabel.textContent = `Price range (45 - ${valueAsNumber})`;

  if ((categoryfilter.value !== 'default' && categoryfilter.value !== 'All') &&
    (publisherfilter.value !== 'default' && publisherfilter.value !== 'All')) {
    console.log(categoryfilter.value);
    console.log(publisherfilter.value);
    books.innerHTML = '';
    newxhrRequest(method, url.concat(`?publisher=${publisherfilter.value}&category=${categoryfilter.value}&price=${valueAsNumber}`), bookData);

  } else if ((categoryfilter.value === 'default' || categoryfilter.value === 'All') &&
    (publisherfilter.value !== 'default' && publisherfilter.value !== 'All')) {

    books.innerHTML = '';
    newxhrRequest(method, url.concat(`?publisher=${publisherfilter.value}&price=${valueAsNumber}`), bookData);

  } else if ((categoryfilter.value !== 'default' && categoryfilter.value !== 'All') &&
    (publisherfilter.value === 'default' || publisherfilter.value === 'All')) {

    books.innerHTML = '';
    newxhrRequest(method, url.concat(`?category=${categoryfilter.value}&price=${valueAsNumber}`), bookData);

  } else {

    books.innerHTML = '';
    newxhrRequest(method, url.concat(`?price=${valueAsNumber}`), bookData);
  }
});