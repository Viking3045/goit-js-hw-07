import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const imageElement = [];
galleryItems.forEach(galleryItem => {

    const link = document.createElement('a');
    link.classList.add('gallery__item')
    link.href = galleryItem.original;
    const img = document.createElement('img');
    img.classList.add('gallery__image')
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    link.appendChild(img)
    imageElement.push(link)
})

gallery.append(...imageElement)


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: "Escape",
});