import React from 'react';

import './Login.css';
import Auth from '../Auth/Auth';
import InputField from '../InputField/InputField';

function Login() {
    return (
        <Auth
            formName='login-form'
            title='Рады видеть!'
            submitButtonText='Войти'
            onSubmitClick={() => {}}
            linkLabel='Ещё не зарегистрированы?'
            linkText='Регистрация'
            linkPath='/signup'
        >
            <InputField labelText='E-mail' type='email' required={true} inputName='login-email'/>
            <InputField labelText='Пароль' type='password' required={true} inputName='login-password' />
        </Auth>
    );
}

export default Login;