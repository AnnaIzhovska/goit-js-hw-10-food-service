
import galleryMarkup from './templates/galerry.hbs'
import cards from './menu.json'
import './styles.css'

const refs = {
  container: document.querySelector('.menu'),
  themeSwitch: document.querySelector('.theme-switch__control'),
  body: document.querySelector('body'),
  input: document.getElementById('theme-switch-toggle'),
}

// --------------------------- Галерея -----------------------------

window.onload = () => {
  const makeGalleryRow = cards.map(galleryMarkup).join('');
  refs.container.insertAdjacentHTML('afterbegin', makeGalleryRow);

}

// --------------------------- Тема -----------------------------

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

  function changeThemeGallery() {
      if (refs.input.checked) {
          refs.body.classList.remove(Theme.LIGHT);
          refs.body.classList.add(Theme.DARK);
          localStorage.setItem('Theme', Theme.DARK);
          return;
      }
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
      localStorage.setItem('Theme', Theme.LIGHT);
  }

  function GalleryThemeMenu() {
   if (localStorage.getItem('Theme') === 'dark-theme') {
      refs.body.classList.add(Theme.DARK);
      refs.input.checked = true;
  }
}
refs.input.addEventListener('click', changeThemeGallery);
GalleryThemeMenu();