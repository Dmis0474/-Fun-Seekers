import React from "react";
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";



let Dialogs = (props) => {
    let dialogs = props.dialogsData.map( d => <DialogsItem name = {d.name} id = {d.id}/>);
    let createNewMessage = React.createRef();
    let sendMessage = () => {
      let message = createNewMessage.current.value;
       alert(message)
  }

    let messages = props.messagesData.map( m => <Messages text = {m.text}/>);
    return (
      <div className={style.dialog__section}>
          <div className={style.dialogs}>
              <div className={style.dialog__items}>
                  {dialogs}
              </div>
              <div className={style.messages}>
                  {messages}
              </div>
          </div>
          <div>
                <textarea className={style.message__form} ref={createNewMessage}></textarea>
                <button onClick={sendMessage} >Отправить</button>
          </div>
      </div>
    )
}

export default Dialogs