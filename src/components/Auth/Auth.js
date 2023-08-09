import React, {useCallback} from 'react';
import Logo from '../Logo/Logo';

import './Auth.css';
import { Link } from 'react-router-dom';
import SubmitButton from "../SubmitButton/SubmitButton";
import AccountTitle from '../AccountTitle/AccountTitle';

function Auth({ formName, title, submitButtonText, onSubmitClick, linkLabel, linkText, linkPath, children }) {

    const submitFormHandler = useCallback((e) => {
        e.preventDefault();
        onSubmitClick();
    }, []);

    return (
        <main className='auth'>
            <section className='auth__container'>
                <div className='auth__header'>
                    <Logo/>
                    <AccountTitle>{title}</AccountTitle>
                </div>
                <form className='auth__form' name={formName} onSubmit={submitFormHandler}>
                    <fieldset className='auth__fields-container'>
                        {children}
                    </fieldset>
                    <SubmitButton text={submitButtonText} type='submit' style='accent'/>
                </form>
                <p className='auth__link-label'>{linkLabel}<Link className='auth__link-text'
                                                                 to={linkPath}>{linkText}</Link></p>
            </section>
        </main>
    );
}

export default Auth;
