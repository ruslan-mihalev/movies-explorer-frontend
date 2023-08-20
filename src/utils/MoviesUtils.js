import {getFullImageUrl} from './MoviesApi';

const convertMovie = ({id, nameRU, image, duration, trailerLink}) => {
    return {id, name: nameRU, imgUrl: getFullImageUrl(image.url), duration, trailerLink}
};

export {convertMovie};