import React from 'react';

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
            <InputField labelText='E-mail' type='email' required={true}
                        inputName='email' inputId='login-email'
                        value='' onChange={(text) => {}}/>
            <InputField labelText='Пароль' type='password' required={true}
                        inputName='password' inputId='login-password'
                        value='' onChange={(text) => {}}/>
        </Auth>
    );
}

export default Login;