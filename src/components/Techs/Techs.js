import React from 'react';

import './Techs.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import SimpleText from "../SimpleText/SimpleText";

function Techs() {
    return (
        <section className='techs' id='techs'>
            <SectionTitle>
                Технологии
            </SectionTitle>
            <h3 className='techs__subtitle'>7 технологий</h3>
            <SimpleText className='techs__text'>
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                проекте.
            </SimpleText>
            <ul className='techs__card-container'>
                <li className='techs__card'>HTML</li>
                <li className='techs__card'>CSS</li>
                <li className='techs__card'>JS</li>
                <li className='techs__card'>React</li>
                <li className='techs__card'>Git</li>
                <li className='techs__card'>Express.js</li>
                <li className='techs__card'>mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;