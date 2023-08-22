import React from 'react';
import './LoadingStatus.css';
import Preloader from '../Preloader/Preloader';

function LoadingStatus({errorMessage}) {
  return (<div className='loading-status'>
    {
      errorMessage ? (<p className='loading-status__error-text'>{errorMessage}</p>) : (<Preloader/>)
    }
  </div>);
}

export default LoadingStatus;
