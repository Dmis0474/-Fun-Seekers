import React from "react";
import style from './Friends.module.css'
import Friend from "./Friend/Friend.jsx";
import DialogsItem from "../Dialogs/DialogsItem/DialogsItem";

const Friends = (props) => {

    let friends = props.friendList.map( f => <Friend firstName = {f.firstName} secondName = {f.secondName} img ={f.img}/>);
    // let Frs = props.friendList.map(f => <Friend firstName={f.firstName} secondName={f.secondName} img = {f.img} />)
    return (
        <div className={style.friends_list}>
            {friends}
        </div>
    )
}

export default Friends