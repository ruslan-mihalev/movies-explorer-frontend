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
  SIGNOUT_ERROR_MESSAGE,
  GET_FAVORITE_MOVIES_ERROR_MESSAGE,
  REMOVE_MOVIE_FROM_FAVORITES_ERROR_MESSAGE,
  ADD_MOVIE_TO_FAVORITES_ERROR_MESSAGE,
  SUCCESSFUL_PROFILE_UPDATE
} from "../../utils/errorMessages";
import {StatusCodes} from "http-status-codes";
import {
  signin,
  signup,
  signout,
  updateUser,
  getUser, getFavoriteMovies, deleteFavoriteMovie, postFavoriteMovie,
} from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {useFavoriteMovies} from '../../contexts/FavoriteMoviesContext';
import {KEY_EMAIL, KEY_FILTERED_MOVIES, KEY_SEARCH_QUERY, KEY_SHORT_MOVIES_ONLY} from '../../utils/constants';

function App() {

  const [email, setEmail] = useState(localStorage.getItem(KEY_EMAIL));
  const [currentUser, setCurrentUser] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [errorAlertMessage, setErrorAlertMessage] = useState(NO_ERROR);
  const [successAlertMessage, setSuccessAlertMessage] = useState(NO_ERROR);
  const [inlineErrorMessage, setInlineErrorMessage] = useState(NO_ERROR);
  const [isProfileEditMode, setIsProfileEditMode] = useState(false);
  const {setFavoriteMovies, addToFavorite, removeFromFavorite} = useFavoriteMovies();

  const navigate = useNavigate();

  const handleSignout = useCallback(() => {
    setIsProfileLoading(true);
    signout()
      .then((body) => {
        localStorage.removeItem(KEY_EMAIL);
        localStorage.removeItem(KEY_SEARCH_QUERY);
        localStorage.removeItem(KEY_SHORT_MOVIES_ONLY);
        localStorage.removeItem(KEY_FILTERED_MOVIES);
        setEmail('');
        navigate('/', {replace: true});
        setInlineErrorMessage('');
      })
      .catch((error) => {
        if (error.statusCode === StatusCodes.BAD_REQUEST) {
          setErrorAlertMessage(BAD_REQUEST_ERROR_MESSAGE);
        } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
          setErrorAlertMessage(INTERNAL_SERVER_ERROR_MESSAGE);
        } else {
          setErrorAlertMessage(SIGNOUT_ERROR_MESSAGE);
        }
      })
      .finally(() => {
        setIsProfileLoading(false);
      });
  }, []);

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
            setErrorAlertMessage(BAD_REQUEST_ERROR_MESSAGE);
          } else if (error.statusCode === StatusCodes.UNAUTHORIZED) {
            // JWT токен признан сервером не актуальным - очистим куки и локальные хранилища
            handleSignout();
          } else if (error.statusCode === StatusCodes.NOT_FOUND) {
            setErrorAlertMessage(PAGE_NOT_FOUND_ERROR_MESSAGE);
          } else {
            setErrorAlertMessage(INTERNAL_SERVER_ERROR_MESSAGE);
          }
        });
    } else {
      setCurrentUser(null);
    }
  }, [email, handleSignout]);

  useEffect(() => {
    if (!email) {
      // Need login
      return;
    }

    getFavoriteMovies()
      .then((movies) => {
        setFavoriteMovies(movies);
      })
      .catch((error) => {
        if (error.statusCode === StatusCodes.BAD_REQUEST) {
          setErrorAlertMessage(BAD_REQUEST_ERROR_MESSAGE);
        } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
          setErrorAlertMessage(INTERNAL_SERVER_ERROR_MESSAGE);
        } else {
          setErrorAlertMessage(GET_FAVORITE_MOVIES_ERROR_MESSAGE);
        }
      });
  }, [email, setFavoriteMovies]);

  const handleAlertMessageCloseClick = useCallback(() => {
    setErrorAlertMessage(NO_ERROR);
    setSuccessAlertMessage(NO_ERROR);
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
        setSuccessAlertMessage(SUCCESSFUL_PROFILE_UPDATE);
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

  const handleTurnProfileEditModeOnClick = useCallback(() => {
    setIsProfileEditMode(true);
  }, []);

  const handleErrorMessage = useCallback((errorMessage) => {
    setErrorAlertMessage(errorMessage);
  }, []);

  const handleAddMovieToFavorite = useCallback((movie) => {
    const {_id, ...postMovie} = movie;
    postFavoriteMovie(postMovie)
      .then((movieFromResponse) => {
        if (movieFromResponse) {
          addToFavorite(movieFromResponse);
        }
      })
      .catch((error) => {
        if (error.statusCode === StatusCodes.BAD_REQUEST) {
          setErrorAlertMessage(BAD_REQUEST_ERROR_MESSAGE);
        } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
          setErrorAlertMessage(INTERNAL_SERVER_ERROR_MESSAGE);
        } else {
          setErrorAlertMessage(ADD_MOVIE_TO_FAVORITES_ERROR_MESSAGE);
        }
      });
  }, [addToFavorite]);

  const handleRemoveMovieFromFavorite = useCallback((movie) => {
    deleteFavoriteMovie({_id: movie._id})
      .then((movieFromResponse) => {
        if (movieFromResponse) {
          removeFromFavorite(movieFromResponse);
        }
      })
      .catch((error) => {
        if (error.statusCode === StatusCodes.BAD_REQUEST) {
          setErrorAlertMessage(BAD_REQUEST_ERROR_MESSAGE);
        } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
          setErrorAlertMessage(INTERNAL_SERVER_ERROR_MESSAGE);
        } else {
          setErrorAlertMessage(REMOVE_MOVIE_FROM_FAVORITES_ERROR_MESSAGE);
        }
      });
  }, [removeFromFavorite]);

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
                     <Movies handleAddMovieToFavorite={handleAddMovieToFavorite}
                             handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
                             onErrorMessage={handleErrorMessage}/>
                   </ProtectedRoute>
                 }
          />
          <Route path='/saved-movies'
                 element={
                   <ProtectedRoute needRedirect={!email}>
                     <SavedMovies handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}/>
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
        {errorAlertMessage
          ? <MessageAlert
            title='Ошибка'
            message={errorAlertMessage}
            onCloseClick={handleAlertMessageCloseClick}/>
          : null
        }
        {successAlertMessage
          ? <MessageAlert
            title='Успех'
            message={successAlertMessage}
            isSuccessMessage={true}
            onCloseClick={handleAlertMessageCloseClick}/>
          : null
        }
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
