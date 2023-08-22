import React, {useCallback, useEffect} from 'react';
import './MessageAlert.css';

function MessageAlert({title, message, isSuccessMessage = false, onCloseClick}) {

  const containerClass = `message-alert__container ${isSuccessMessage
    ? 'message-alert__container_type_successful' : 'message-alert__container_type_errorful'}`;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onCloseClick();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onCloseClick]);

  const backgroundClickHandler = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onCloseClick();
    }
  }, [onCloseClick]);

  return (
    <div className='message-alert' onClick={backgroundClickHandler}>
      <div className={containerClass}>
        <div className='message-alert__content'>
          <p className='message-alert__title'>
            {title}
          </p>
          <p className='message-alert__message'>
            {message}
          </p>
        </div>
        <button className='message-alert__close-button' onClick={onCloseClick}/>
      </div>
    </div>
  );
}

export default MessageAlert;
