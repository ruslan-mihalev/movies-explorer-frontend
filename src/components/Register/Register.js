import React from 'react';

import './Register.css';
import Auth from '../Auth/Auth';
import Field from '../Field/Field';

function Register() {
    return (
        <Auth
            title='Добро пожаловать!'
            submitButtonText='Зарегистрироваться'
            onSubmitClick={() => {}}
            linkLabel='Уже зарегистрированы?'
            linkText='Войти'
            linkPath='/signin'
        >
            <Field labelText='Имя' type='text' />
            <Field labelText='E-mail' type='email' />
            <Field labelText='Пароль' type='password' errorText='Что-то пошло не так...' />
        </Auth>
    );
}

export default Register;