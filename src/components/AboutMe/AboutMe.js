import React from 'react';

import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import Summary from '../Summary/Summary';
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {
    return (
        <section className="about-me" id='about-me'>
            <SectionTitle>
                Студент
            </SectionTitle>
            <Summary className='about-me__summary'/>
            <Portfolio className='about-me__portfolio'/>
        </section>
    );
}

export default AboutMe;