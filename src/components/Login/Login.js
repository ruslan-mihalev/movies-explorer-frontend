import React from 'react';

import './Login.css';
import Auth from '../Auth/Auth';
import Field from '../Field/Field';

function Login() {
    return (
        <Auth
            title='Рады видеть!'
            submitButtonText='Войти'
            onSubmitClick={() => {}}
            linkLabel='Ещё не зарегистрированы?'
            linkText='Регистрация'
            linkPath='/signup'
        >
            <Field labelText='E-mail' type='email' />
            <Field labelText='Пароль' type='password' />
        </Auth>
    );
}

export default Login;