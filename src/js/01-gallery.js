// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      item =>
        `<li>
          <a class="gallery__item" href="${item.original}">
            <img 
              class="gallery__image" 
              src="${item.preview}" 
              alt="${item.description}" />
          </a>
        </li>`
    )
    .join('');
}

galleryUl.innerHTML = createGalleryMarkup(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
