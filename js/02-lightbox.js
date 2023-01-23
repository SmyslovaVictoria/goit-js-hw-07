import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGalleryCard(cardItems) {
  return cardItems
    .map(({ preview, original, description }) => {
      return `
            <a class= "gallery__item" href="${original}" data-lightbox = "lbox">
                <img
                    class= "gallery__image"
                    src="${preview}"
                    alt="${description}"
                    />
             </a>`;
    })
    .join("");
};

const galleryList = createGalleryCard(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);


const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});


