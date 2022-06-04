import React from 'react';
import s from './NewestPosts.module.css'
import Post from './Post/Post';
import News from "../News";


const NewestPosts = (props) => {
    let Posts = props.Posts.map( p => <Post text = {p.text}  likes = {p.likes} disLakes = {p.disLakes} img = {p.imgUrl} />)
    return (
     <div>
      Newest posts
      <div className = {s.create__post}>
        <div>New post</div> 
        <textarea className = {s.textarea}>Впишите что у вас происходит</textarea>
        <button>Отправить</button>
      </div>
      <div>
        Отображение всех постов:
        {Posts}
      </div>
     
    </div>
    )
}

export default NewestPosts