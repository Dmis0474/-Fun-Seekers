import React from "react";
import style from './../Dialogs.module.css'



let Messages = (props) => {
   return  <div className={style.message}>{props.text}</div>
}

export default Messages