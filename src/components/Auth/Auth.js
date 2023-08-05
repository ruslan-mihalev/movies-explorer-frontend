import React, {useCallback} from 'react';
import Logo from '../Logo/Logo';

import './Auth.css';
import { Link } from 'react-router-dom';
import SubmitButton from "../SubmitButton/SubmitButton";
import AccountTitle from "../AccountTitle/AccountTitle";

function Auth({title, submitButtonText, onSubmitClick, linkLabel, linkText, linkPath, children}) {

    const submitHandler = useCallback((e) => {
        e.preventDefault();
        onSubmitClick();
    }, []);

    return (
        <section className='auth'>
            <div className='auth__container'>
                <div className='auth__header'>
                    <Logo/>
                    <AccountTitle>{title}</AccountTitle>
                </div>
                <form className='auth__form' onSubmit={submitHandler}>
                    <fieldset className='auth__fields-container'>
                        {children}
                    </fieldset>
                    <SubmitButton text={submitButtonText}/>
                </form>
                <p className='auth__link-label'>{linkLabel}<Link className='auth__link-text'
                                                                 to={linkPath}>{linkText}</Link></p>
            </div>
        </section>
    );
}

export default Auth;
