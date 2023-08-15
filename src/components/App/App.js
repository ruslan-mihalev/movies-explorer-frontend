import './App.css';
import Main from '../Main/Main';
import {Route, Routes} from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import React, {useCallback, useEffect, useState} from 'react';
import MessageAlert from '../MessageAlert/MessageAlert';
import {NO_ERROR} from "../../utils/errorMessages";

function App() {

    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(NO_ERROR);
    const [isProfileEditMode, setIsProfileEditMode] = useState(false);
    const [moviesList, setMoviesList] = useState([]);
    const [savedMoviesList, setSavedMoviesList] = useState([]);
    const [isShortFilmSwitchedOn, setShortFilmSwitchedOn] = useState(false);
    const [isShortFilmSwitchedOnForSavedMovies, setShortFilmSwitchedOnForSavedMovies] = useState(false);

    useEffect(() => {
        setMoviesList([
            {
                key: '1',
                name: 'Побег из Шоушенка',
                duration: '2ч22м',
                imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540',
                isSavedCard: true,
            },
            {
                key: '2',
                name: 'Остров',
                duration: '2ч16м',
                imgUrl: 'https://image.tmdb.org/t/p/original/1NXdkAz2QAcvFo3BmyfEt10IVq5.jpg',
            },
            {
                key: '3',
                name: 'На игле',
                duration: '1ч34м',
                imgUrl: 'https://kino-punk.ru/wp-content/uploads/2021/07/107055.jpg',
                isSavedCard: true,
            },
            {
                key: '4',
                name: 'Нефть',
                duration: '2ч38м',
                imgUrl: 'https://www.soyuz.ru/public/uploads/files/5/7483436/1005x558_202206192136351d2253ce92.jpg',
            },
            {
                key: '5',
                name: 'Бойцовский клуб',
                duration: '2ч19м',
                imgUrl: 'https://batenka.ru/media/images/fight-club--povy.width-1280.pngquality-80.jpegquality-80.jpg',
            },
        ]);
    }, []);

    useEffect(() => {
        setSavedMoviesList([
            {
                key: '1',
                name: 'Побег из Шоушенка',
                duration: '2ч22м',
                imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/e6dd24cbe07ab6ecd0d31dedd58b870f/960x540',
                isSavedCard: true,
            },
            {
                key: '2',
                name: 'Остров',
                duration: '2ч16м',
                imgUrl: 'https://image.tmdb.org/t/p/original/1NXdkAz2QAcvFo3BmyfEt10IVq5.jpg',
                isSavedCard: true,
            },
            {
                key: '3',
                name: 'На игле',
                duration: '1ч34м',
                imgUrl: 'https://kino-punk.ru/wp-content/uploads/2021/07/107055.jpg',
                isSavedCard: true,
            },
            {
                key: '4',
                name: 'Нефть',
                duration: '2ч38м',
                imgUrl: 'https://www.soyuz.ru/public/uploads/files/5/7483436/1005x558_202206192136351d2253ce92.jpg',
                isSavedCard: true,
            },
            {
                key: '5',
                name: 'Бойцовский клуб',
                duration: '2ч19м',
                imgUrl: 'https://batenka.ru/media/images/fight-club--povy.width-1280.pngquality-80.jpegquality-80.jpg',
                isSavedCard: true,
            },
        ]);
    }, []);

    const handleAlertMessageCloseClick = useCallback(() => {
        setErrorMessage(NO_ERROR);
    }, []);

    const handleRegister = useCallback((inputs) => {
        console.log(`handleRegister() inputs: ${JSON.stringify(inputs)}`);
    }, []);

    const handleLogin = useCallback((inputs) => {
        console.log(`handleLogin() inputs: ${JSON.stringify(inputs)}`);
    }, []);

    const handleUpdateProfile = useCallback((inputs) => {
        console.log(`handleUpdateProfile() inputs: ${JSON.stringify(inputs)}`);
    }, []);

    const handleSignout = useCallback((inputs) => {
        console.log(`handleSignout() inputs: ${JSON.stringify(inputs)}`);
    }, []);

    const handleSearchMoviesQuerySubmit = useCallback((query) => {
        console.log(`handleSearchMoviesQuerySubmitted() query: ${query}, shortFilms: ${isShortFilmSwitchedOn}`);
    }, [isShortFilmSwitchedOn]);

    const handleSearchSavedMoviesQuerySubmit = useCallback((query) => {
        console.log(`handleSearchSavedMoviesQuerySubmitted() query: ${query}, shortFilms: ${isShortFilmSwitchedOnForSavedMovies}`);
    }, [isShortFilmSwitchedOnForSavedMovies]);

    const handleOnGerMoreMoviesClick = useCallback(() => {
        console.log(`handleOnGerMoreMoviesClick()`);
    }, []);

    const handleTurnEditModeOnClick = useCallback(() => {
        console.log(`handleTurnEditModeOnClick()`);
        setIsProfileEditMode(true);
    }, []);

    const handleCardClick = useCallback(() => {
        console.log(`handleCardClick()`);
    }, []);

    const handleActionClick = useCallback((isSavedCard) => {
        console.log(`handleActionClick() isSavedCard: ${isSavedCard}`);
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='app'>
                <Routes>
                    <Route path='/'
                           element={
                               <Main/>
                           }/>
                    <Route path='/movies'
                           element={
                               <Movies
                                   isLoading={isLoading}
                                   moviesList={moviesList}
                                   onSearchQuerySubmit={handleSearchMoviesQuerySubmit}
                                   isShortFilmSwitchedOn={isShortFilmSwitchedOn}
                                   onShortFilmSwitchStateChange={setShortFilmSwitchedOn}
                                   onGetMoreMoviesClick={handleOnGerMoreMoviesClick}
                                   onCardClick={handleCardClick}
                                   onActionClick={handleActionClick}
                               />
                           }
                    />
                    <Route path='/saved-movies'
                           element={
                               <SavedMovies
                                   isLoading={isLoading}
                                   moviesList={savedMoviesList}
                                   onSearchQuerySubmit={handleSearchSavedMoviesQuerySubmit}
                                   isShortFilmSwitchedOn={isShortFilmSwitchedOnForSavedMovies}
                                   onShortFilmSwitchStateChange={setShortFilmSwitchedOnForSavedMovies}
                                   onCardClick={handleCardClick}
                                   onActionClick={handleActionClick}
                               />
                           }
                    />
                    <Route path='/profile'
                           element={
                               <Profile
                                   isLoading={isLoading}
                                   isEditMode={isProfileEditMode}
                                   onUpdateProfile={handleUpdateProfile}
                                   onSignOutClick={handleSignout}
                                   onTurnEditModeOnClick={handleTurnEditModeOnClick}
                               />
                           }
                    />
                    <Route path='/signin'
                           element={
                               <Login
                                   isLoading={isLoading}
                                   onLogin={handleLogin}
                               />
                           }
                    />
                    <Route path='/signup'
                           element={
                               <Register
                                   isLoading={isLoading}
                                   onRegister={handleRegister}
                               />
                           }
                    />
                    <Route path='*'
                           element={
                               <NotFound/>
                           }
                    />
                </Routes>
                {errorMessage
                    ? <MessageAlert
                        title='Ошибка'
                        message={errorMessage}
                        onCloseClick={handleAlertMessageCloseClick}/>
                    : null
                }
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
