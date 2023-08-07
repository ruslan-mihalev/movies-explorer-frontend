import React from 'react';

import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (<section className="about-me" id='about-me'>
        <SectionTitle>
            Студент
        </SectionTitle>
        <Portfolio/>
    </section>);
}

export default AboutMe;