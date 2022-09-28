// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryCards = createGalaryCards(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryCards)
galleryEl.addEventListener('click', createClickImg)

function createGalaryCards(galleryItems) {
    return galleryItems.map(({description,preview,original}) =>{
        return `   
<div class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  data-source="${original}"
  alt="${description}" />
</a>
</div>
`;
    }).join('');   
}

function createClickImg(e) {
    e.preventDefault();
 }

 var lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: "250"});






console.log(galleryItems);
console.log(SimpleLightbox);
