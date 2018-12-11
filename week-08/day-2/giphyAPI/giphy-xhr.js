const myApiKey = 'a2keqikK64TZju7xx6NQexu8NT72FNsp';
const picRequest = new XMLHttpRequest();
const host = 'https://api.giphy.com';
const gifs = document.querySelector('.images')

picRequest.onreadystatechange = () => {
  if (picRequest.readyState === XMLHttpRequest.DONE) {
    if (picRequest.status === 200) {
      const response = JSON.parse(picRequest.responseText);
      loadImages(response.data);
    }
  }
}


picRequest.open('GET', `${host}/v1/gifs/search?api_key=${myApiKey}&q=santa&limit=16&offset=0&rating=G&lang=en`);
picRequest.send();

const loadImages = (array) => {
  array.forEach((e) => {
    const newGif = document.createElement('img');
    newGif.setAttribute('src', e.images.original_still.url);
    gifs.appendChild(newGif);
    let clickCounter = 0;
    newGif.onclick = () => {
      if (clickCounter === 0) {
        newGif.setAttribute('src', e.images.downsized.url);
        clickCounter++;
      } else {
        newGif.setAttribute('src', e.images.original_still.url);
        clickCounter--;
      }
    }
  });
}
