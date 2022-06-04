import React from 'react';
import NewestPosts from './NewestPosts/NewestPosts.jsx';
import NewsHeader from "./NewsHeader/NewsHeader";
import style from './News.module.css'

const News = (props) => {

    return <div className={style.content}>
        <NewsHeader/>
        <NewestPosts Posts = {props.Posts}/>
    </div>
}


export default News

