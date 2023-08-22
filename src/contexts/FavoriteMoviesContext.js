import {createContext, useCallback, useContext, useState} from 'react';

const FavoriteMoviesContext = createContext({
  favoriteMovies: [],
  setFavoriteMovies: () => {
    // Stub
  },
  addToFavorite: () => {
    // Stub
  },
  removeFromFavorite: () => {
    // Stub
  }
});

export const FavoriteMoviesContextProvider = ({children}) => {

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addToFavorite = useCallback((movie) => {
    setFavoriteMovies((prev) => [...prev, movie]);
  }, []);

  const removeFromFavorite = useCallback((movie) => {
    setFavoriteMovies(prev => prev.filter(favoriteMovie => favoriteMovie.movieId !== movie.movieId));
  }, []);

  return (
    <FavoriteMoviesContext.Provider value={{
      favoriteMovies,
      setFavoriteMovies,
      addToFavorite,
      removeFromFavorite
    }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};


export function useFavoriteMovies() {
  return useContext(FavoriteMoviesContext);
}
