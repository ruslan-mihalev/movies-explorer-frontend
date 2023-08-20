import {useEffect, useState} from "react";

export function usePagination() {
    const [pageSizes, setPageSizes] = useState([0, 0]);

    useEffect(() => {
        const matchSmall = window.matchMedia('(min-width: 320px)');
        const matchExtraLarge = window.matchMedia('(min-width: 1280px)');
        const matchLarge = window.matchMedia('(min-width: 1024px)');
        const matchMedium = window.matchMedia('(min-width: 768px)');


        function handleChange() {
            if (matchExtraLarge.matches) {
                setPageSizes([16, 4]);
            } else if (matchLarge.matches) {
                setPageSizes([12, 3]);
            } else if (matchMedium.matches) {
                setPageSizes([8, 2]);
            } else {
                setPageSizes([5, 2]);
            }
        }

        handleChange();

        matchExtraLarge.addEventListener('change', handleChange);
        matchLarge.addEventListener('change', handleChange);
        matchMedium.addEventListener('change', handleChange);
        matchSmall.addEventListener('change', handleChange);

        return () => {
            matchExtraLarge.removeEventListener('change', handleChange);
            matchLarge.removeEventListener('change', handleChange);
            matchMedium.removeEventListener('change', handleChange);
            matchSmall.removeEventListener('change', handleChange);
        };
    }, []);

    return pageSizes;
}