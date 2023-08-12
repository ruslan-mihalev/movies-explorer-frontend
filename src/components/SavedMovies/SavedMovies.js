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
            key: '1',
            name: 'Побег из Шоушенка',
            duration: '2ч22м',
            imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540',
            actionType: 'remove',
        },
        {
            key: '2',
            name: 'Остров',
            duration: '2ч16м',
            imgUrl: 'https://image.tmdb.org/t/p/original/1NXdkAz2QAcvFo3BmyfEt10IVq5.jpg',
            actionType: 'remove',
        },
        {
            key: '3',
            name: 'На игле',
            duration: '1ч34м',
            imgUrl: 'https://kino-punk.ru/wp-content/uploads/2021/07/107055.jpg',
            actionType: 'remove',
        },
        {
            key: '4',
            name: 'Нефть',
            duration: '2ч38м',
            imgUrl: 'https://www.soyuz.ru/public/uploads/files/5/7483436/1005x558_202206192136351d2253ce92.jpg',
            actionType: 'remove',
        },
        {
            key: '5',
            name: 'Бойцовский клуб',
            duration: '2ч19м',
            imgUrl: 'https://batenka.ru/media/images/fight-club--povy.width-1280.pngquality-80.jpegquality-80.jpg',
            actionType: 'remove',
        },
    ];

    return (
        <main className='saved-movies'>
            <Header isAuthorized={true} />
            <SearchPanel onSearchClicked={() => {}}/>
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