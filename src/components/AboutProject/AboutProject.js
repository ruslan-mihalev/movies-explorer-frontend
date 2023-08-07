import React from 'react';

import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProgressBar from '../ProgresBar/ProgressBar';
import ArticleAboutProject from '../ArticleAboutProject/ArticleAboutProject';

function AboutProject() {
    return (
        <section className='about-project' id='about-project'>
            <div className='about-project__container'>
                <SectionTitle>
                    О проекте
                </SectionTitle>
                <div className='about-project__article-list'>
                    <ArticleAboutProject
                        title='Дипломный проект включал 5 этапов'
                        text='Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.'
                    />
                    <ArticleAboutProject
                        title='На выполнение диплома ушло 5 недель'
                        text='На выполнение диплома ушло 5 недель</h3>
                        <SimpleText>У каждого этапа был мягкий и жёсткий дедлайн, которые
                            нужно было соблюдать, чтобы успешно защититься.'
                    />
                </div>
                <ProgressBar />
            </div>
        </section>
    );
}

export default AboutProject;
