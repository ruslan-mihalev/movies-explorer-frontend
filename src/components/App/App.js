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
import {
    BAD_REQUEST_ERROR_MESSAGE,
    PAGE_NOT_FOUND_ERROR_MESSAGE,
    INTERNAL_SERVER_ERROR_MESSAGE,
    NO_ERROR,
    WRONG_EMAIL_OR_PASSWORD_ERROR_MESSAGE,
    USER_REGISTRATION_ERROR_MESSAGE,
    USER_AUTHORIZATION_ERROR_MESSAGE,
    EMAIL_COLLISION_ERROR_MESSAGE,
    PROFILE_UPDATE_ERROR_MESSAGE,
    SIGNOUT_ERROR_MESSAGE
} from "../../utils/errorMessages";
import {StatusCodes} from "http-status-codes";
import {
    signin,
    signup,
    signout,
    updateUser,
    getUser,
    deleteFavoriteMovie,
    postFavoriteMovie,
    getFavoriteMovies
} from "../../utils/MainApi";

function App() {

    const [email, setEmail] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(NO_ERROR);
    const [isProfileEditMode, setIsProfileEditMode] = useState(false);
    const [moviesList, setMoviesList] = useState([]);
    const [savedMoviesList, setSavedMoviesList] = useState([]);
    const [isShortFilmSwitchedOn, setShortFilmSwitchedOn] = useState(false);
    const [isShortFilmSwitchedOnForSavedMovies, setShortFilmSwitchedOnForSavedMovies] = useState(false);

    const KEY_EMAIL = 'email';
    const KEY_FAVORITE_MOVIES = 'favorite-movies';

    useEffect(() => {
        const savedEmail = localStorage.getItem(KEY_EMAIL);
        console.log(`savedEmail from local storage: ${savedEmail}`);
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);


    // Request currentUser
    useEffect(() => {
        console.log(`email forgetting user: ${email}`);
        if (email) {
            getUser()
                .then((body) => {
                    console.log(`Users body: ${JSON.stringify(body)}`);
                    setCurrentUser(body);
                })
                .catch((error) => {
                    if (error.statusCode === StatusCodes.BAD_REQUEST) {
                        setErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                    } else if (error.statusCode === StatusCodes.NOT_FOUND) {
                        setErrorMessage(PAGE_NOT_FOUND_ERROR_MESSAGE);
                    } else {
                        setErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                    }
                });
        } else {
            setCurrentUser(null);
        }
    }, [email]);

    // Request Saved Movies
    useEffect(() => {
    }, []);

    // Request all movies
    useEffect(() => {
    }, []);

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
        signup(inputs)
            .then((body) => {
                setEmail(body.email);
                console.log(`body: ${JSON.stringify(body)}`);
            })
            .catch((error) => {
                if (error.statusCode === StatusCodes.BAD_REQUEST) {
                    setErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.NOT_FOUND) {
                    setErrorMessage(PAGE_NOT_FOUND_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.CONFLICT) {
                    setErrorMessage(EMAIL_COLLISION_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
                    setErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                } else {
                    setErrorMessage(USER_REGISTRATION_ERROR_MESSAGE);
                }
            });
    }, []);

    const handleLogin = useCallback((inputs) => {
        console.log(`handleLogin() inputs: ${JSON.stringify(inputs)}`);
        signin(inputs)
            .then((body) => {
                console.log(`body: ${JSON.stringify(body)}`);
                localStorage.setItem(KEY_EMAIL, body.email);
                setEmail(body.email);
            })
            .catch((error) => {
                if (error.statusCode === StatusCodes.BAD_REQUEST) {
                    setErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.UNAUTHORIZED) {
                    setErrorMessage(WRONG_EMAIL_OR_PASSWORD_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.NOT_FOUND) {
                    setErrorMessage(PAGE_NOT_FOUND_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
                    setErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                } else {
                    setErrorMessage(USER_AUTHORIZATION_ERROR_MESSAGE);
                }
            });
    }, []);

    const handleUpdateProfile = useCallback((inputs) => {
        console.log(`handleUpdateProfile() inputs: ${JSON.stringify(inputs)}`);
        updateUser(inputs)
            .then((body) => {
                console.log(`body: ${JSON.stringify(body)}`);
                setCurrentUser(body);
                setEmail(body.email);
            })
            .catch((error) => {
                if (error.statusCode === StatusCodes.BAD_REQUEST) {
                    setErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.NOT_FOUND) {
                    setErrorMessage(PAGE_NOT_FOUND_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.CONFLICT) {
                    setErrorMessage(EMAIL_COLLISION_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
                    setErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                } else {
                    setErrorMessage(PROFILE_UPDATE_ERROR_MESSAGE);
                }
            });
    }, []);

    const handleSignout = useCallback(() => {
        console.log(`handleSignout()`);
        signout()
            .then((body) => {
                console.log(`body: ${JSON.stringify(body)}`);
                localStorage.removeItem(KEY_EMAIL);
                setEmail('');
            })
            .catch((error) => {
                if (error.statusCode === StatusCodes.BAD_REQUEST) {
                    setErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
                    setErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                } else {
                    setErrorMessage(SIGNOUT_ERROR_MESSAGE);
                }
            });
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
