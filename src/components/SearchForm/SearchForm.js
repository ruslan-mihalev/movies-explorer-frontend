import React from 'react';

import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search-form">
            <FilterCheckbox/>
        </section>
    );
}

export default SearchForm;