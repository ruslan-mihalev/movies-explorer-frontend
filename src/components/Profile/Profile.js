import React, {useCallback, useContext, useState} from 'react';

import './Profile.css';
import Header from '../Header/Header';
import OutlineButton from '../OutlineButton/OutlineButton';
import AccountTitle from '../AccountTitle/AccountTitle';
import StaticField from '../StaticField/StaticField';
import SubmitButton from '../SubmitButton/SubmitButton';
import InputField from '../InputField/InputField';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useForm} from '../../utils/hooks/useForm';

function Profile({
                     isLoading,
                     isEditMode,
                     onUpdateProfile,
                     onTurnEditModeOnClick,
                     onSignOutClick
                 }) {
    const {values, handleChange} = useForm({name: '', email: ''});

    const currentUser = useContext(CurrentUserContext);

    const [profileUpdateError] = useState('При обновлении профиля произошла ошибка.');

    const handleProfileChangesSubmit = useCallback((e) => {
        e.preventDefault();
        onUpdateProfile(values)
    }, [onUpdateProfile, values.name, values.email]);

    return (
        <main className='profile'>
            <Header isAuthorized={true}/>
            <section className='profile__content'>
                {isEditMode ? (
                    <form className='profile__form' name='edit-profile-form' onSubmit={handleProfileChangesSubmit}>
                        <div className='profile__title-container'>
                            <AccountTitle>Привет, {currentUser?.name}!</AccountTitle>
                        </div>
                        <fieldset className='profile__fields-container'>
                            <InputField labelText='Имя' type='text' required={true}
                                        inputName='name' inputId='edit-name'
                                        value={values.name} onChange={handleChange}
                                        disabled={isLoading}/>
                            <InputField labelText='E-mail' type='email' required={true}
                                        inputName='email' inputId='edit-email'
                                        value={values.email} onChange={handleChange}
                                        disabled={isLoading}/>
                        </fieldset>

                        <fieldset className='profile__buttons-container'>
                            {profileUpdateError ? (
                                <p className='profile__update-error'>{profileUpdateError}</p>) : null}
                            <SubmitButton
                                className='profile__save-button'
                                text='Сохранить'
                                disabled={isLoading}
                            />
                        </fieldset>
                    </form>
                ) : (
                    <div className='profile__form'>
                        <div className='profile__title-container'>
                            <AccountTitle>Привет, {currentUser?.name}!</AccountTitle>
                        </div>

                        <div className='profile__fields-container'>
                            <StaticField className='profile__name-field'
                                         labelText='Имя' value='Виталий'/>
                            <StaticField className='profile__email-field'
                                         labelText='E-mail' value='pochta@yandex.ru'/>
                        </div>

                        <div className='profile__buttons-container'>
                            <OutlineButton
                                className='profile__edit-button'
                                text='Редактировать'
                                onClick={onTurnEditModeOnClick}
                                disabled={isLoading}
                            />
                            <OutlineButton
                                className='profile__logout-button'
                                text='Выйти из аккаунта'
                                onClick={onSignOutClick}
                                disabled={isLoading}
                            />
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Profile;