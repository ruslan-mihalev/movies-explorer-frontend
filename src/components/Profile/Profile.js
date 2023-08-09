import React, {useCallback, useState} from 'react';

import './Profile.css';
import Header from "../Header/Header";
import OutlineButton from "../OutlineButton/OutlineButton";
import AccountTitle from "../AccountTitle/AccountTitle";
import StaticField from "../StaticField/StaticField";
import SubmitButton from "../SubmitButton/SubmitButton";
import InputField from "../InputField/InputField";

function Profile({name}) {

    const [isModeEdit, setIsModeEdit] = useState(false);
    const [profileUpdateError, setProfileUpdateError] = useState('При обновлении профиля произошла ошибка.');

    const handleSaveChangesClick = useCallback(() => {
        setIsModeEdit(false);
    }, []);

    const handleEditProfileClick = useCallback(() => {
        setIsModeEdit(true);
    }, []);

    return (
        <main className='profile'>
            <Header/>
            <div className='profile__container'>
                <section className='profile__content'>
                    <AccountTitle>Привет, {name}!</AccountTitle>
                    {isModeEdit ? (
                        <form className='profile__form'>
                            <fieldset className='profile__fields-container'>
                                <InputField labelText='Имя' type='text' value='Виталий' required={true}
                                            inputName='edit-name'/>
                                <InputField labelText='E-mail' type='email' value='pochta@yandex.ru' required={true}
                                            inputName='edit-email'/>
                            </fieldset>

                            <div className='profile__buttons'>
                                {profileUpdateError ? (
                                    <p className='profile__update-error'>{profileUpdateError}</p>) : null}
                                <SubmitButton text='Сохранить' onClick={handleSaveChangesClick}></SubmitButton>
                            </div>
                        </form>
                    ) : (
                        <form className='profile__form'>
                            <fieldset className='profile__fields-container'>
                                <StaticField labelText='Имя' value='Виталий'/>
                                <StaticField labelText='E-mail' value='pochta@yandex.ru'/>
                            </fieldset>

                            <div className='profile__buttons'>
                                <OutlineButton text='Редактировать' onClick={handleEditProfileClick}/>
                                <OutlineButton text='Выйти из аккаунта' onClick={() => {
                                }} style='danger'/>
                            </div>
                        </form>
                    )}
                </section>
            </div>
        </main>
    );
}

export default Profile;