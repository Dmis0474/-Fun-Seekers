import React from 'react';
import style from './NewsHeader.module.css'

const NewsHeader = () => {
        return ( <div>
            <img src='https://pbs.twimg.com/media/EWvJIo7XsAAQEU2?format=jpg&name=4096x4096' className={style.content__img}></img>
        <div className={style.content__menu}>
        <img src='https://www.shortlist.com/media/imager/201909/39289-posts.article_md.jpg'></img>
        <img src='https://247wallst.com/wp-content/uploads/2021/11/disenchantment.jpg'></img>
        <img src='https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/02/560478929_1280x720.jpg'></img>
        </div>
        </div>)
}

export default NewsHeader