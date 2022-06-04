import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let messagesData = [
    { id: '1', text: 'хи -хи'},
    { id: '2',text: 'Это Питер'},
    { id: '3', text: 'хи -хи'}
]
let dialogsData = [
    {id: "1", name: "Гомер"},
    {id: "2", name: "Луис Гриффин"},
    {id: "3", name: "Стьюи"},
    {id: "4", name: "Барт"},
    {id: "5", name: "Рик"},
    {id: "6", name: "Морти"},
    {id: "7", name: "Подозрительная сова"}
]

let Posts = [
    {text: 'Здорова бандиты, как жизнь молодая', likes: '9', disLakes: '12', imgUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png'},
    {text: 'Часик в радость, чифир в сладость!', likes: '5', disLakes: '6', imgUrl: 'https://www.w3schools.com/w3images/avatar2.png'},
    {text: 'Привет, всем!', likes: '6', disLakes: '18', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj-1KIYtvjs4ft-nBOoDvTshg3UtK02xhhA&usqp=CAU'},
    {text: 'Здорова, бродяги', likes: '18', disLakes: '23', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHy-bQodluMn2jH7DwwhvllSj8vqzCkVzTmIRirhvrCkh87VweeC0yKMBoaTMT5vDqMTU&usqp=CAU'},
    {text: 'Здесь будут отображаться все новости', likes: '23', disLakes: '123', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rwX1Fm7PMZC4xx7HELaMnE7XOYaji9QFK8T7kbEmh6L5LyzB_1h96ejfy2pi4KqYT2c&usqp=CAU'}
]


const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App Posts = {Posts} dialogsData={dialogsData} messagesData={messagesData}/>

  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
