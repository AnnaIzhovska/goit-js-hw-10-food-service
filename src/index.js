
import galleryMarkup from './templates/galerry.hbs'
import cards from './menu.json'
import './js/localstorage.js'
import './styles.css'

// refs = {

// }

window.onload = () => {
const container = document.querySelector('. js-menu');

container.innerHTML = galleryMarkup(cards);
}


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  // console.log(galleryMarkup(cards));

  // function createGalleryCardsMarkup(cards){
  //   return cards
  //   .map(galleryMarkup)
  //   .join('');
  // }

  // document.body.insertAdjacentHTML('beforeend',createGalleryCardsMarkup)