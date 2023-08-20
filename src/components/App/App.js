import './App.css';
import Main from '../Main/Main';
import {Route, Routes, useNavigate} from 'react-router-dom';
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
} from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {

    const KEY_EMAIL = 'email';
    const KEY_FAVORITE_MOVIES = 'favorite-movies';

    const [email, setEmail] = useState(localStorage.getItem(KEY_EMAIL));
    const [currentUser, setCurrentUser] = useState(null);
    const [isProfileLoading, setIsProfileLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(NO_ERROR);
    const [inlineErrorMessage, setInlineErrorMessage] = useState(NO_ERROR);
    const [isProfileEditMode, setIsProfileEditMode] = useState(false);

    const navigate = useNavigate();

    // Request currentUser
    useEffect(() => {
        if (email) {
            getUser()
                .then((body) => {
                    setCurrentUser(body);
                    localStorage.setItem(KEY_EMAIL, body.email);
                    setEmail(body.email);
                })
                .catch((error) => {
                    if (error.statusCode === StatusCodes.BAD_REQUEST) {
                        setErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                    } else if (error.statusCode === StatusCodes.UNAUTHORIZED) {
                        handleSignout();
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


    const handleAlertMessageCloseClick = useCallback(() => {
        setErrorMessage(NO_ERROR);
    }, []);

    const handleRegister = useCallback((inputs) => {
        setIsProfileLoading(true);
        signup(inputs)
            .then(() => signin(inputs))
            .then((body) => {
                localStorage.setItem(KEY_EMAIL, body.email);
                setEmail(body.email);
                navigate('/movies', {replace: true})
                setInlineErrorMessage('');
            })
            .catch((error) => {
                if (error.statusCode === StatusCodes.BAD_REQUEST) {
                    setInlineErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.NOT_FOUND) {
                    setInlineErrorMessage(PAGE_NOT_FOUND_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.CONFLICT) {
                    setInlineErrorMessage(EMAIL_COLLISION_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
                    setInlineErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                } else {
                    setInlineErrorMessage(USER_REGISTRATION_ERROR_MESSAGE);
                }
            })
            .finally(() => {
                setIsProfileLoading(false);
            });
    }, []);

    const handleLogin = useCallback((inputs) => {
        setIsProfileLoading(true);
        signin(inputs)
            .then((body) => {
                localStorage.setItem(KEY_EMAIL, body.email);
                setEmail(body.email);
                navigate('/movies', {replace: true})
                setInlineErrorMessage('');
            })
            .catch((error) => {
                if (error.statusCode === StatusCodes.BAD_REQUEST) {
                    setInlineErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.UNAUTHORIZED) {
                    setInlineErrorMessage(WRONG_EMAIL_OR_PASSWORD_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.NOT_FOUND) {
                    setInlineErrorMessage(PAGE_NOT_FOUND_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
                    setInlineErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                } else {
                    setInlineErrorMessage(USER_AUTHORIZATION_ERROR_MESSAGE);
                }
            })
            .finally(() => {
                setIsProfileLoading(false);
            });
    }, []);

    const handleUpdateProfile = useCallback((inputs) => {
        setIsProfileLoading(true);
        updateUser(inputs)
            .then((body) => {
                setCurrentUser(body);
                setEmail(body.email);
                setIsProfileEditMode(false);
                setInlineErrorMessage('');
            })
            .catch((error) => {
                if (error.statusCode === StatusCodes.BAD_REQUEST) {
                    setInlineErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.NOT_FOUND) {
                    setInlineErrorMessage(PAGE_NOT_FOUND_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.CONFLICT) {
                    setInlineErrorMessage(EMAIL_COLLISION_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
                    setInlineErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                } else {
                    setInlineErrorMessage(PROFILE_UPDATE_ERROR_MESSAGE);
                }
            })
            .finally(() => {
                setIsProfileLoading(false);
            });
    }, []);

    const handleSignout = useCallback(() => {
        setIsProfileLoading(true);
        signout()
            .then((body) => {
                localStorage.removeItem(KEY_EMAIL);
                setEmail('');
                navigate('/', {replace: true});
                setInlineErrorMessage('');
            })
            .catch((error) => {
                if (error.statusCode === StatusCodes.BAD_REQUEST) {
                    setErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
                    setErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                } else {
                    setErrorMessage(SIGNOUT_ERROR_MESSAGE);
                }
            })
            .finally(() => {
                setIsProfileLoading(false);
            });
    }, []);

    const handleTurnProfileEditModeOnClick = useCallback(() => {
        setIsProfileEditMode(true);
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
                               <ProtectedRoute needRedirect={!email}>
                                   <Movies/>
                               </ProtectedRoute>
                           }
                    />
                    <Route path='/saved-movies'
                           element={
                               <ProtectedRoute needRedirect={!email}>
                                   <SavedMovies/>
                               </ProtectedRoute>
                           }
                    />
                    <Route path='/profile'
                           element={
                               <ProtectedRoute needRedirect={!email}>
                                   <Profile
                                       isLoading={isProfileLoading}
                                       serverError={inlineErrorMessage}
                                       isEditMode={isProfileEditMode}
                                       onUpdateProfile={handleUpdateProfile}
                                       onSignOutClick={handleSignout}
                                       onTurnEditModeOnClick={handleTurnProfileEditModeOnClick}
                                   />
                               </ProtectedRoute>
                           }
                    />
                    <Route path='/signin'
                           element={
                               <Login
                                   isLoading={isProfileLoading}
                                   serverError={inlineErrorMessage}
                                   onLogin={handleLogin}
                               />
                           }
                    />
                    <Route path='/signup'
                           element={
                               <Register
                                   isLoading={isProfileLoading}
                                   serverError={inlineErrorMessage}
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
