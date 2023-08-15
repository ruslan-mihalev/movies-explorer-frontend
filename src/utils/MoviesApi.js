import { BASE_MOVIES_API_URL as BASE_URL } from './hosts';

async function getMovies() {
    fetch(`${BASE_URL}/beatfilm-movies`)
}

async function getFullImageUrl(relativePath) {
    return `${BASE_URL}${relativePath}`;
}

export { getMovies };