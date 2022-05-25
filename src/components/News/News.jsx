import React from 'react';
import NewestPosts from './NewestPosts/NewestPosts.jsx';
import NewsHeader from "./NewsHeader/NewsHeader";
import style from './News.module.css'

const News = () => {
    return <div className={style.content}>
        <NewsHeader/>
        <NewestPosts/>
    </div>
}

export default News