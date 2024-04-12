import axios from 'axios';

async function serviceGetImage({ query, page = 1 }) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43229281-da9ce3bce46360bd3cf91ebb8';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  };

  const { data } = await axios(BASE_URL, { params: { ...params, page } });
  return data;
}

export { serviceGetImage };
