import React from 'react';
import clasess from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return <nav className={clasess.nav}>
    <div className={clasess.item}>
     <NavLink to ="/profiles" className = {navData => navData.isActive ? clasess.active : clasess.item } >Моя страница</NavLink>
    </div>
    <div className={clasess.item}>
    <NavLink to ="/dialogs" className = {navData => navData.isActive ? clasess.active : clasess.item} >Сообщения</NavLink>
    </div>
    <div className={clasess.item}>
    <NavLink to ="/musics" className = {navData => navData.isActive ? clasess.active : clasess.item} >Музыка</NavLink>
    </div>
    <div className={clasess.item}>
    <NavLink to ="/news" className = {navData => navData.isActive ? clasess.active : clasess.item} >Новости</NavLink>
    </div>
    <div className={clasess.item}>
    <NavLink to ="/settings" className = {navData => navData.isActive ? clasess.active : clasess.item} >Настройки</NavLink>
    </div>
  </nav>
}

export default Navigation