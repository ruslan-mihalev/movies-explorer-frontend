import React from 'react';

import './Main.css';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <main className="main">
            <Promo>
                <Header/>
            </Promo>
            <NavTab/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Footer/>
        </main>
    );
}

export default Main;