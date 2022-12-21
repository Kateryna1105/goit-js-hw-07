import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listItem = document.querySelector('.gallery');
listItem.addEventListener('click', onClick);

const markup = galleryItems.map(({ preview, original, description }) => 
        `<div class="gallery__item">
       <a class="gallery__link" 
       href="${original}">
            <img class="gallery__image" 
              src='${ preview }' 
              data-source='${ original }' 
              alt='${description}'
             />
        </a>
    </div>`).join("")

listItem.insertAdjacentHTML('beforeend', markup);

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,
        {
            onShow: (instance) => {
                document.addEventListener("keydown", onEscapeKeyDown);
            },
            onClose: (instance) => {
                document.addEventListener("keydown", onEscapeKeyDown);
            },
        }
    );
    instance.show();
    function onEscapeKeyDown(evt) {
        if (evt.code !== "Escape") {
            return;
        }
        instance.close();
    }
};

