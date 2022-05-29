import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


let DialogItem = (props) => {
    return (<div className={style.dialog + ' ' + style.active}>
        <NavLink to={"/dialogs/" + props.id} className={style.nav}> {props.name} </NavLink>
    </div>)
}
let Message = (props) => {
   return  <div className={style.message}>{props.text}</div>
}


let dialogsData = [
    {id: "1", name: "Гомер"},
    {id: "2", name: "Луис Гриффин"},
    {id: "3", name: "Стьюи"},
    {id: "4", name: "Барт"},
    {id: "5", name: "Рик"},
    {id: "6", name: "Морти"},
    {id: "7", name: "Подозрительная сова"}
]

let messagesData = [
    { id: '1', text: 'хи -хи'},
    { id: '2',text: 'Это Питер'},
    { id: '3', text: 'хи -хи'}
]

let dialogs = dialogsData.map( d => <DialogItem name = {d.name} id = {d.id}/>);

let messages = messagesData.map( m => <Message text = {m.text}/>);


let Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog__items}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
            </div>

        </div>
    )
}

export default Dialogs