const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery')

function makeGallaryItems(array) {
  return array.map(el => {
  const galleryItem = document.createElement('li')
  galleryItem.classList.add('gallary__item')

  const imageEl = document.createElement('img');
  imageEl.src = el.url;
  imageEl.alt = el.alt;
  imageEl.classList.add('gallery__item__picture')

  galleryItem.appendChild(imageEl)
  
  return galleryItem
})}

const galleryImages = makeGallaryItems(images)

galleryEl.append(...galleryImages)