import React from 'react';
import s from './NewestPosts.module.css'
import Post from './Post/Post';

const NewestPosts = () => {
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
        <Post text = 'Здорова бандиты, как жизнь молодая'  likes = '9' disLakes = '12' img = 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png' />
        <Post text = 'Часик в радость, чифир в сладость!' likes = '5'  disLakes = '1'  img = 'https://www.w3schools.com/w3images/avatar2.png' />
        <Post text = 'Привет, всем!' likes = '6' disLakes = '6' img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj-1KIYtvjs4ft-nBOoDvTshg3UtK02xhhA&usqp=CAU' />
        <Post text = 'Здорова, бродяги' likes = '4' disLakes = '18' img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHy-bQodluMn2jH7DwwhvllSj8vqzCkVzTmIRirhvrCkh87VweeC0yKMBoaTMT5vDqMTU&usqp=CAU'/>
        <Post text = 'Здесь будут отображаться все новости'  likes = '123' disLakes = '34' img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rwX1Fm7PMZC4xx7HELaMnE7XOYaji9QFK8T7kbEmh6L5LyzB_1h96ejfy2pi4KqYT2c&usqp=CAU'/>
      </div>
     
    </div>
    )
}

export default NewestPosts