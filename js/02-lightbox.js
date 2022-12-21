import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listItem = document.querySelector(".gallery");
listItem.addEventListener("click", onClick);

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" 
              src='${preview}' 
              alt='${description}'
             />
        </a>`
  )
  .join("");

listItem.insertAdjacentHTML("beforeend", markup);

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    var lightbox = new SimpleLightbox(".gallery a", {
      captionData: "alt",
      captionDelay: 250,
    });
};


