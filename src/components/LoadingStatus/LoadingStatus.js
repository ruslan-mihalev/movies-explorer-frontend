import React from 'react';
import './LoadingStatus.css';
import Preloader from "../Preloader/Preloader";

function LoadingStatus({ hasError }) {
    return (<div className='loading-status'>
        {
            hasError ? (<p className='loading-status__error-text'>Ничего не найдено</p>) : (<Preloader/>)
        }
    </div>);
}

export default LoadingStatus;