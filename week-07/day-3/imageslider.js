const images = [
  {
    title: "First Title",
    src: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descr: "First landit lobortis dictum congue rutrum habitasse ac pretium? Integer vitae ac quis himenaeos! Ultricies potenti blandit hendrerit ultricies? Fames elementum pellentesque porttitor, massa malesuada sed proin. Magnis conubia natoque erat. Himenaeos ipsum vulputate dictumst tincidunt, massa venenatis.",
  },
  {
    title: "Second Title",
    src: "https://pbs.twimg.com/media/DMDIKcyWsAEsKDj.jpg",
    descr: "Second landit lobortis dictum congue rutrum habitasse ac pretium? Integer vitae ac quis himenaeos! Ultricies potenti blandit hendrerit ultricies? Fames elementum pellentesque porttitor, massa malesuada sed proin. Magnis conubia natoque erat. Himenaeos ipsum vulputate dictumst tincidunt, massa venenatis.",
  },
  {
    title: "Third Title",
    src: "https://cdn.pixabay.com/photo/2016/07/02/12/21/wallpaper-1492818_960_720.jpg",
    descr: "Third landit lobortis dictum congue rutrum habitasse ac pretium? Integer vitae ac quis himenaeos! Ultricies potenti blandit hendrerit ultricies? Fames elementum pellentesque porttitor, massa malesuada sed proin. Magnis conubia natoque erat. Himenaeos ipsum vulputate dictumst tincidunt, massa venenatis.",
  },
  {
    title: "Fourth Title",
    src: "https://wallpaperspit.com/wp-content/uploads/2017/11/Mountain-HD-Wallpapers-1080p-940x529.jpeg",
    descr: "Fourth landit lobortis dictum congue rutrum habitasse ac pretium? Integer vitae ac quis himenaeos! Ultricies potenti blandit hendrerit ultricies? Fames elementum pellentesque porttitor, massa malesuada sed proin. Magnis conubia natoque erat. Himenaeos ipsum vulputate dictumst tincidunt, massa venenatis.",
  },
  {
    title: "Fifth Title",
    src: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descr: "Fifth landit lobortis dictum congue rutrum habitasse ac pretium? Integer vitae ac quis himenaeos! Ultricies potenti blandit hendrerit ultricies? Fames elementum pellentesque porttitor, massa malesuada sed proin. Magnis conubia natoque erat. Himenaeos ipsum vulputate dictumst tincidunt, massa venenatis.",
  },
  {
    title: "Sixth Title",
    src: "http://3.bp.blogspot.com/-0QeNuqnPXGw/T1jV6nkuU3I/AAAAAAAAUxo/G_WcVLUNIEA/s640/Free-Hd-Nature-Mountain-River-Wallpaper.jpg",
    descr: "Sixth landit lobortis dictum congue rutrum habitasse ac pretium? Integer vitae ac quis himenaeos! Ultricies potenti blandit hendrerit ultricies? Fames elementum pellentesque porttitor, massa malesuada sed proin. Magnis conubia natoque erat. Himenaeos ipsum vulputate dictumst tincidunt, massa venenatis.",
  },
  {
    title: "Seventh Title",
    src: "http://3.bp.blogspot.com/-i1WZXxXFg1w/T1jV5DN05UI/AAAAAAAAUxE/varZtlGtEvU/s640/Beautiful-Pc-Background-Nature.jpg",
    descr: "Seventh landit lobortis dictum congue rutrum habitasse ac pretium? Integer vitae ac quis himenaeos! Ultricies potenti blandit hendrerit ultricies? Fames elementum pellentesque porttitor, massa malesuada sed proin. Magnis conubia natoque erat. Himenaeos ipsum vulputate dictumst tincidunt, massa venenatis.",
  },
  {
    title: "Eight Title",
    src: "http://2.bp.blogspot.com/-9vXTN8Bc0D8/T1jXtgbBU-I/AAAAAAAAU0c/yCDSOW5iC-U/s640/HD_beautiful_nature_hd_background_wallpaper.jpg",
    descr: "Eight landit lobortis dictum congue rutrum habitasse ac pretium? Integer vitae ac quis himenaeos! Ultricies potenti blandit hendrerit ultricies? Fames elementum pellentesque porttitor, massa malesuada sed proin. Magnis conubia natoque erat. Himenaeos ipsum vulputate dictumst tincidunt, massa venenatis.",
  }
];

const thumbnails = document.querySelector('.thumbnails');
const mainImage = document.querySelector('.imageslider');
const leftArrow = document.querySelector('button.left');
const rightArrow = document.querySelector('button.right');
let counter = 0;
const title = document.querySelector('#title');
const story = document.querySelector('#story');

function openPage() {
  mainImage.setAttribute('src', images[0].src);
  title.textContent = images[0].title;
  story.textContent = images[0].descr;
}

openPage();

for (let i = 0; i < images.length; i++) {
  const smallImg = document.createElement('img');
  smallImg.setAttribute('src', images[i].src);
  thumbnails.appendChild(smallImg);
}

const buttons = document.querySelectorAll('.thumbnails img');

leftArrow.onclick = () => {
  if (counter === 0) {
    counter = images.length - 1;
    mainImage.setAttribute('src', images[counter].src);
    title.textContent = images[counter].title;
    story.textContent = images[counter].descr;
  } else {
    counter--;
    mainImage.setAttribute('src', images[counter].src);
    title.textContent = images[counter].title;
    story.textContent = images[counter].descr;
  }
}

rightArrow.onclick = () => {
  if (counter === images.length - 1) {
    counter = 0;
    mainImage.setAttribute('src', images[counter].src);
    title.textContent = images[counter].title;
    story.textContent = images[counter].descr;
  } else {
    counter++;
    mainImage.setAttribute('src', images[counter].src);
    title.textContent = images[counter].title;
    story.textContent = images[counter].descr;
  }
}

buttons.forEach((e, i) => {
  e.onclick = () => {
    mainImage.setAttribute('src', e.getAttribute('src'));
    counter = i;
    title.textContent = images[counter].title;
    story.textContent = images[counter].descr;
  }
});