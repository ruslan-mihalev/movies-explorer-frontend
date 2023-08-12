import React, {useState} from 'react';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GetMoreMovies from '../GetMoreMovies/GetMoreMovies';
import SearchPanel from '../SearchPanel/SearchPanel';
import LoadingStatus from "../LoadingStatus/LoadingStatus";
import MessageAlert from "../MessageAlert/MessageAlert";

function Movies() {

    const [isLoading] = useState(false);
    const moviesList = [
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
            actionType: 'saved',
        },
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
        },
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
            actionType: 'saved',
        },
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
        },
        {
            name: '33 слова о дизайне',
            duration: '1ч42м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',
        },
    ];
    const [errorMessage, setErrorMessage] = useState('На сервере произошла ошибка.');

    return (
        <main className='movies'>
            <Header/>
            <SearchPanel onSearchClicked={() => {
            }}/>
            {isLoading
                ? (<LoadingStatus/>)
                : (<MoviesCardList
                    moviesList={moviesList}
                />)
            }
            <GetMoreMovies onLoadMoreButtonClick={() => {
            }}/>
            <Footer/>
            {errorMessage ? <MessageAlert title='Ошибка' message={errorMessage} onCloseClick={() => {
                setErrorMessage('')
            }}/> : null}
        </main>
    );
}

export default Movies;