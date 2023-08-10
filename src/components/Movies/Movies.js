import React from 'react';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GetMoreMovies from '../GetMoreMovies/GetMoreMovies';
import SearchPanel from '../SearchPanel/SearchPanel';

function Movies() {
    return (
        <main className='movies'>
            <Header/>
            <SearchPanel onSearchClicked={() => {
            }}/>
            <MoviesCardList
                moviesList={[
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
                        imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/17793dcb-8c17-4326-a43e-efc4c6adf06d/3840x',actionType: 'saved',
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

                ]}
            />
            <GetMoreMovies onLoadMoreButtonClick={() => {
            }}/>
            <Footer/>
        </main>
    );
}

export default Movies;