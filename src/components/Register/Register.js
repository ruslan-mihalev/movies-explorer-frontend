import React from 'react';

import Auth from '../Auth/Auth';
import InputField from '../InputField/InputField';

function Register() {
    return (
        <Auth
            formName='register-form'
            title='Добро пожаловать!'
            submitButtonText='Зарегистрироваться'
            onSubmitClick={() => {}}
            linkLabel='Уже зарегистрированы?'
            linkText='Войти'
            linkPath='/signin'
        >
            <InputField labelText='Имя' type='text' required={true}
                        inputName='name' inputId='register-name'
                        value='' onChange={(text) => {}}/>
            <InputField labelText='E-mail' type='email' required={true}
                        inputName='email' inputId='register-email'
                        value='' onChange={(text) => {}}/>
            <InputField labelText='Пароль' type='password' required={true}
                        inputName='password' inputId='register-password'
                        value='' onChange={(text) => {}}
                        errorText='Что-то пошло не так...' />
        </Auth>
    );
}

export default Register;