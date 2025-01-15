import images from './images';
import SimpleLightbox from 'simplelightbox';

const createGallery = () => {
  const galleryList = document.querySelector('.gallery');
  const fragment = document.createDocumentFragment();

  images.forEach(image => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    const link = document.createElement('a');
    link.classList.add('gallery-link');
    link.href = image.original;

    const img = document.createElement('img');
    img.classList.add('gallery-image');
    img.src = image.preview;
    img.alt = image.description;

    link.appendChild(img);
    listItem.appendChild(link);
    fragment.appendChild(listItem);
  });

  galleryList.appendChild(fragment);
};

createGallery();

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
