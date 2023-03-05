import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const imageElement = [];
galleryItems.forEach(galleryItem => {
    const container = document.createElement('div');
    container.classList.add('gallery__item');
    const link = document.createElement('a');
    link.classList.add('gallery__link')
    link.href = galleryItem.original;
    const img = document.createElement('img');
    img.classList.add('gallery__image')
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    img.dataset.source = galleryItem.original;
    link.appendChild(img)
    container.appendChild(link)

    imageElement.push(container)
})

gallery.append(...imageElement)
gallery.addEventListener('click', e => {
     e.preventDefault()
    if (e.target.nodeName !== "IMG") 
        return;
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

    instance.show()
    gallery.addEventListener('keydown', (event) => {
    if (event.code !== "Escape") {
        return;
    }
      instance.close()
})
})

