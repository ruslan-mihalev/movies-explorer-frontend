import React from 'react';
import './ArticleAboutProject.css';
import SimpleText from "../SimpleText/SimpleText";

function ArticleAboutProject({ title, text }) {
    return(
        <article className='article-about-project'>
            <h3 className='article-about-project__title'>Дипломный проект включал 5 этапов</h3>
            <SimpleText>Составление плана, работу над бэкендом, вёрстку,
                добавление функциональности и финальные доработки.</SimpleText>
        </article>
    );
}

export default ArticleAboutProject;