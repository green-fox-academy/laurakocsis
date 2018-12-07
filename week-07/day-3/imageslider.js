const images = [
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://pbs.twimg.com/media/DMDIKcyWsAEsKDj.jpg",
  "https://cdn.pixabay.com/photo/2016/07/02/12/21/wallpaper-1492818_960_720.jpg",
  "https://wallpaperspit.com/wp-content/uploads/2017/11/Mountain-HD-Wallpapers-1080p-940x529.jpeg",
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "http://3.bp.blogspot.com/-0QeNuqnPXGw/T1jV6nkuU3I/AAAAAAAAUxo/G_WcVLUNIEA/s640/Free-Hd-Nature-Mountain-River-Wallpaper.jpg",
  "http://3.bp.blogspot.com/-i1WZXxXFg1w/T1jV5DN05UI/AAAAAAAAUxE/varZtlGtEvU/s640/Beautiful-Pc-Background-Nature.jpg",
  "http://2.bp.blogspot.com/-9vXTN8Bc0D8/T1jXtgbBU-I/AAAAAAAAU0c/yCDSOW5iC-U/s640/HD_beautiful_nature_hd_background_wallpaper.jpg"
]

const thumbnails = document.querySelector('.thumbnails');
const mainImage = document.querySelector('.imageslider');
const leftArrow = document.querySelector('button.left');
const rightArrow = document.querySelector('button.right');

mainImage.setAttribute('src', images[0]);

for (let i = 0; i < images.length; i++) {
  const smallImg = document.createElement('img');
  smallImg.setAttribute('src', images[i]);
  thumbnails.appendChild(smallImg);
}

const buttons = document.querySelectorAll('.thumbnails img');

leftArrow.onclick = () => {
  if (mainImage.getAttribute('src') === images[0]) {
    mainImage.setAttribute('src', images[images.length - 1]);
  } else {
    mainImage.setAttribute('src', images[images.indexOf(mainImage.getAttribute('src')) - 1]);
  }
}

rightArrow.onclick = () => {
  if (mainImage.getAttribute('src') === images[images.length - 1]) {
    mainImage.setAttribute('src', images[0]);
  } else {
    mainImage.setAttribute('src', images[images.indexOf(mainImage.getAttribute('src')) + 1]);
  }
}

buttons.forEach(e => {
  e.onclick = () => {
    mainImage.setAttribute('src', e.getAttribute('src'));
  }
});