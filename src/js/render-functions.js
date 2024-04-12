function createImageMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="list-item">
      <a class="item-link" href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}"></a>
      <div class="img-desc">
        <p class="prop">Likes <span class="value">${likes}</span></p>
        <p class="prop">Views <span class="value">${views}</span></p>
        <p class="prop">Comments <span class="value">${comments}</span></p>
        <p class="prop">Downloads <span class="value">${downloads}</span></p>
      </div>
      
      </li>`
    )
    .join('');
}

export { createImageMarkup };
