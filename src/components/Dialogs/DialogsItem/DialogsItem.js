import React from "react";
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


let DialogsItem = (props) => {
    return (<div className={style.dialog + ' ' + style.active}>
        <NavLink to={"/dialogs/" + props.id} className={style.nav}> {props.name} </NavLink>
    </div>)
}

export default DialogsItem