import {BASE_MOVIES_API_URL as BASE_URL} from './hosts';
import HttpError from './HttpError';

async function getMovies() {
  const options = {
    method: 'GET',
  };
  return fetch(`${BASE_URL}/beatfilm-movies`, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json()
          .then((body) => {
            return Promise.reject(new HttpError(response.status, response.statusText, body));
          });
      }
    });
}

function getFullImageUrl(relativePath) {
  return `${BASE_URL}${relativePath}`;
}

export {getMovies, getFullImageUrl};
