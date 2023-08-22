import React from 'react';

import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProgressBar from '../ProgresBar/ProgressBar';
import ArticleAboutProject from '../ArticleAboutProject/ArticleAboutProject';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <div className='about-project__container'>
        <SectionTitle className='about-project__title'>
          О проекте
        </SectionTitle>
        <div className='about-project__article-list'>
          <ArticleAboutProject
            className='about-project__article'
            title='Дипломный проект включал 5 этапов'
            description='Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.'
          />
          <ArticleAboutProject
            className='about-project__article'
            title='На выполнение диплома ушло 5 недель'
            description='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
          />
        </div>
        <ProgressBar/>
      </div>
    </section>
  );
}

export default AboutProject;
