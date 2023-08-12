import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
    const getMatches = (query) => {
        return window.matchMedia(query).matches;
    }

    const [matches, setMatches] = useState(getMatches(query));

    useEffect(() => {
        const matchMedia = window.matchMedia(query);

        function handleChange() {
            setMatches(getMatches(query));
        }

        handleChange();

        matchMedia.addEventListener('change', handleChange);

        return () => {
            matchMedia.removeEventListener('change', handleChange);
        }
    }, [query]);

    return matches;
}