function serviceGetImage(query){

  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43229281-da9ce3bce46360bd3cf91ebb8';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}


export { serviceGetImage };
