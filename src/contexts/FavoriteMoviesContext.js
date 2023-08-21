import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const FavoriteMoviesContext = createContext({
    favoriteMovies: [],
    setFavoriteMovies: (movies) => {
        // Stub
    },
    addToFavorite: (movie) => {
        // Stub
    },
    removeFromFavorite: (movieId) => {
        // Stub
    }
});

export const FavoriteMoviesContextProvider = ({children}) => {

    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const addToFavorite = useCallback((movie) => {
        setFavoriteMovies((prev) => [...prev, movie]);
    }, [favoriteMovies]);

    const removeFromFavorite = useCallback((movie) => {
        setFavoriteMovies(prev => prev.filter(favoriteMovie => favoriteMovie.movieId !== movie.movieId));
    }, [favoriteMovies]);

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
    console.log(`useFavoriteMovies()`);
    return useContext(FavoriteMoviesContext);
}