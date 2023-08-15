import React, {useCallback} from 'react';
import Logo from '../Logo/Logo';

import './Auth.css';
import {Link} from 'react-router-dom';
import SubmitButton from '../SubmitButton/SubmitButton';
import AccountTitle from '../AccountTitle/AccountTitle';

function Auth({
                  isLoading,
                  formName,
                  title,
                  submitButtonText,
                  onSubmitClick,
                  linkLabel,
                  linkText,
                  linkPath,
                  children
              }) {

    const submitFormHandler = useCallback((e) => {
        e.preventDefault();
        onSubmitClick();
    }, [onSubmitClick]);

    return (
        <main className='auth'>
            <form className='auth__form' name={formName} onSubmit={submitFormHandler}>
                <div className='auth__title-container'>
                    <Logo/>
                    <AccountTitle>{title}</AccountTitle>
                </div>
                <fieldset className='auth__fields-container'>
                    {children}
                </fieldset>
                <fieldset className='auth__buttons-container'>
                    <SubmitButton
                        className='auth__submit-button'
                        text={submitButtonText}
                        type='submit'
                        disabled={isLoading}
                    />
                    <p className='auth__link-label'>{linkLabel}<Link className='auth__link-text'
                                                                     to={linkPath}>{linkText}</Link></p>
                </fieldset>
            </form>
        </main>
    );
}

export default Auth;
