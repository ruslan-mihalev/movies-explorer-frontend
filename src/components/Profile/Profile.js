import React, {useCallback, useState} from 'react';

import './Profile.css';
import Header from '../Header/Header';
import OutlineButton from '../OutlineButton/OutlineButton';
import AccountTitle from '../AccountTitle/AccountTitle';
import StaticField from '../StaticField/StaticField';
import SubmitButton from '../SubmitButton/SubmitButton';
import InputField from '../InputField/InputField';

function Profile({name}) {

    const [isModeEdit, setIsModeEdit] = useState(false);
    const [profileUpdateError] = useState('При обновлении профиля произошла ошибка.');

    const handleProfileChangesSubmit = useCallback(() => {
        // Временная реализация
        setIsModeEdit(false);
    }, []);

    const handleEditProfileClick = useCallback(() => {
        // Временная реализация
        setIsModeEdit(true);
    }, []);

    const handleLogOutClick = useCallback(() => {
        // Временная реализация
    }, []);

    return (
        <main className='profile'>
            <Header isAuthorized={true}/>
            <section className='profile__content'>
                {isModeEdit ? (
                    <form className='profile__form' name='edit-profile-form' onSubmit={handleProfileChangesSubmit}>
                        <div className='profile__title-container'>
                            <AccountTitle>Привет, {name}!</AccountTitle>
                        </div>
                        <fieldset className='profile__fields-container'>
                            <InputField labelText='Имя' type='text' required={true}
                                        inputName='name' inputId='edit-name'
                                        value='Виталий' onChange={(text) => {
                            }}/>
                            <InputField labelText='E-mail' type='email' required={true}
                                        inputName='email' inputId='edit-email'
                                        value='pochta@yandex.ru' onChange={(text) => {
                            }}/>
                        </fieldset>

                        <fieldset className='profile__buttons-container'>
                            {profileUpdateError ? (
                                <p className='profile__update-error'>{profileUpdateError}</p>) : null}
                            <SubmitButton className='profile__save-button' text='Сохранить'/>
                        </fieldset>
                    </form>
                ) : (
                    <div className='profile__form'>
                        <div className='profile__title-container'>
                            <AccountTitle>Привет, {name}!</AccountTitle>
                        </div>

                        <div className='profile__fields-container'>
                            <StaticField className='profile__name-field'
                                         labelText='Имя' value='Виталий'/>
                            <StaticField className='profile__email-field'
                                         labelText='E-mail' value='pochta@yandex.ru'/>
                        </div>

                        <div className='profile__buttons-container'>
                            <OutlineButton className='profile__edit-button' text='Редактировать'
                                           onClick={handleEditProfileClick}/>
                            <OutlineButton className='profile__logout-button' text='Выйти из аккаунта'
                                           onClick={handleLogOutClick}/>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Profile;