// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const gallery = document.querySelector('.gallery');

const arrayOfGalleryItems = galleryItems.map(elem => {
    const galleryItem = `
    <a class="gallery__item" href="${elem.original}">
        <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
    </a>
    `;
    return galleryItem;
})

let galleryItemsMarkup = arrayOfGalleryItems.join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
