import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  
    return (
        <div className={s.item}>
          <img src={props.img}></img>
          {props.text}
          <button>Like {props.likes}</button>
          <button>DisLike{props.disLakes}</button>
        </div>   
    )
}

export default Post