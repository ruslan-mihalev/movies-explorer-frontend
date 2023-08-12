import React, {useState} from 'react';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesDivider from '../MoviesDivider/MoviesDivider';
import SearchPanel from '../SearchPanel/SearchPanel';
import LoadingStatus from "../LoadingStatus/LoadingStatus";

function SavedMovies() {

    const [isLoading] = useState(false);
    const moviesList = [
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
            actionType: 'remove',
        },
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
            actionType: 'remove',
        },
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
            actionType: 'remove',
        },
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
            actionType: 'remove',
        },
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
            actionType: 'remove',
        },
    ];

    return (
        <main className='saved-movies'>
            <Header isAuthorized={true} />
            <SearchPanel onSearchClicked={() => {
            }}/>
            {
                isLoading
                    ? (<LoadingStatus/>)
                    : (<MoviesCardList
                        moviesList={moviesList}
                    />)
            }

            <MoviesDivider/>
            <Footer/>
        </main>
    );
}

export default SavedMovies;