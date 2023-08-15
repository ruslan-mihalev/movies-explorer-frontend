import {BASE_API_URL as BASE_URL} from './hosts';

const _defaultHeaders = {
    'Content-Type': 'application/json'
};

async function _responseHandler(response) {
    if (response.ok) {
        return response.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${response.status}`);
}

async function _doRequest(method, url, body) {
    const options = {
        method: method,
        headers: _defaultHeaders,
        credentials: 'include',
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(url, options).then(_responseHandler);
}

async function signup({ email, password, name }) {
    return _doRequest('POST', `${BASE_URL}/signup`, { email, password, name });
}

async function signin({ email, password }) {
    return _doRequest('POST', `${BASE_URL}/signin`, { email, password });
}

async function signout() {
    return _doRequest('GET', `${BASE_URL}/signout`);
}

async function getUser() {
    return _doRequest('GET', `${BASE_URL}/users/me`);
}

async function updateUser({ email, name }) {
    return _doRequest('PATCH', `${BASE_URL}/users/me`, { email, name });
}

async function getFavoriteMovies() {
    return _doRequest('', `${BASE_URL}/movies/`);
}

/**
 * @param movie = {
 *     country,
 *     director,
 *     duration,
 *     year,
 *     description,
 *     image,
 *     trailerLink,
 *     thumbnail,
 *     movieId,
 *     nameRU,
 *     nameEN,
 * }
 *
 * @returns {Promise<Response>}
 */
async function postFavoriteMovie(movie) {
    return _doRequest('', `${BASE_URL}/movies/`, movie);
}

async function deleteFavoriteMovie({ movieId }) {
    return _doRequest('', `${BASE_URL}/movies/${movieId}`);
}

export {signup, signin, signout, getUser, updateUser, getFavoriteMovies, postFavoriteMovie, deleteFavoriteMovie};