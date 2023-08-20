import {getFullImageUrl} from './MoviesApi';

const convertMovie = ({
                          id,
                          nameRU = '',
                          nameEN = '',
                          description,
                          image: {formats: {thumbnail: {url: thumbnailPath}}, url: imagePath},
                          trailerLink,
                          duration = 0,
                          year,
                          country,
                          director,
                      }) => {
    return {
        movieId: id,
        nameRU,
        nameEN,
        description,
        image: getFullImageUrl(imagePath),
        thumbnail: getFullImageUrl(thumbnailPath),
        trailerLink,
        duration,
        year,
        country,
        director,
    }
};

const checkByWords = (term, queryWords) => {
    return queryWords.some(word => term.includes(word));
}

const filterMovies = (movies, searchQuery, shortMoviesOnly) => {

    // Разбиваем запрос на слова ибо в задании сказано "нужно проверять, есть ли введенные слова в"
    const queryWords = searchQuery.trim().toLowerCase().split(' ');

    // Сначала фильтруем по времени - это явно более простой фильтр
    const prefilteredMovies = shortMoviesOnly ? movies.filter((movie) => movie.duration <= 40) : movies;

    // Фильтруем по вхождению слов из поискового запроса в основные тестовые блоки описания фильма
    return prefilteredMovies
        .filter((movie) => {
            return checkByWords(movie.nameRU.toLowerCase(), queryWords)
                || checkByWords(movie.nameEN.toLowerCase(), queryWords);
                // || checkByWords(movie.description.toLowerCase(), queryWords)
                // || checkByWords(movie.director.toLowerCase(), queryWords)
                // || checkByWords(movie.country.toLowerCase(), queryWords)
                // || checkByWords(movie.year, queryWords);
        }
    );
};

export {convertMovie, filterMovies};