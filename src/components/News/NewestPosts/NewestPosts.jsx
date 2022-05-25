import React from 'react';
import s from './NewestPosts.module.css'
import Post from './Post/Post';

let postsData = [
  {text: 'Здорова бандиты, как жизнь молодая', likes: '9', disLakes: '12', imgUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png'},
  {text: 'Часик в радость, чифир в сладость!', likes: '5', disLakes: '6', imgUrl: 'https://www.w3schools.com/w3images/avatar2.png'},
  {text: 'Привет, всем!', likes: '6', disLakes: '18', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj-1KIYtvjs4ft-nBOoDvTshg3UtK02xhhA&usqp=CAU'},
  {text: 'Здорова, бродяги', likes: '18', disLakes: '23', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHy-bQodluMn2jH7DwwhvllSj8vqzCkVzTmIRirhvrCkh87VweeC0yKMBoaTMT5vDqMTU&usqp=CAU'},
  {text: 'Здесь будут отображаться все новости', likes: '23', disLakes: '123', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rwX1Fm7PMZC4xx7HELaMnE7XOYaji9QFK8T7kbEmh6L5LyzB_1h96ejfy2pi4KqYT2c&usqp=CAU'}
]

let Posts = postsData.map( p => <Post text = {p.text}  likes = {p.likes} disLakes = {p.disLakes} img = {p.imgUrl} />)



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
        {Posts}
      </div>
     
    </div>
    )
}

export default NewestPosts