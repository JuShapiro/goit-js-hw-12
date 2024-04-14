import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { serviceGetImage } from './js/pixabay-api';
import { createImageMarkup } from './js/render-functions';

const form = document.querySelector('.js-form');
const loader = document.querySelector('.preloader');
const gallery = document.querySelector('.js-list');
const loadMoreButton = document.querySelector('.btn-load-more');

form.addEventListener('submit', handlerSearch);
loadMoreButton.addEventListener('click', handleMoreLoadClick);

const modal = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

let page = 1;
let query = '';
let lastPage;

async function handlerSearch(event) {
  event.preventDefault();
  page = 1;
  gallery.innerHTML = '';
  query = event.target.elements.query.value.trim().toLowerCase();
  if (!query) {
    iziToast.warning({
      message: 'Please input your request',
      position: 'topRight',
    });
    return;
  }
  loader.classList.remove('is-hidden');
  loadMoreButton.classList.add('is-hidden');
  try {
    const data = await serviceGetImage({ query, page });
    checkLastPage(data.totalHits);

    if (!data.hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: 'red',
        messageColor: '#fff',
      });
      return;
    }
    gallery.innerHTML = createImageMarkup(data.hits);

    modal.refresh();
  } catch (err) {
    err.statusText;
  } finally {
    loader.classList.add('is-hidden');
  }

  event.target.reset();
}

async function handleMoreLoadClick(event) {
  page += 1;
  loader.classList.remove('is-hidden');
  try {
    const data = await serviceGetImage({ query, page });

    checkLastPage(data.totalHits);

    gallery.insertAdjacentHTML('beforeend', createImageMarkup(data.hits));
    scrollGallery();

    modal.refresh();
  } catch (err) {
    err.statusText;
  } finally {
    loader.classList.add('is-hidden');
  }
}

function scrollGallery() {
  const galleryItem = gallery.querySelector('.list-item');
  if (!galleryItem) {
    return;
  }
  const { height } = galleryItem.getBoundingClientRect();
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

function checkLastPage(totalHits) {
  lastPage = Math.ceil(totalHits / 15);
  if (page < lastPage) {
    loadMoreButton.classList.remove('is-hidden');
  } else if (page === lastPage) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      backgroundColor: 'blue',
      messageColor: '#000',
    });
    loadMoreButton.classList.add('is-hidden');
  }
}
