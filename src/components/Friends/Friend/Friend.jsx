import React from 'react';
import style from './Friend.module.css'

const Friend = (props) => {



    return (
            <div className={style.item}>
                <div className={style.loader_wrapper}>
                    <img src={props.img} className={style.img}></img>
                    <div className={style.loader}>
                        <div className={`${style.loader} ${style.inner}`}>
                        </div>
                    </div>
                </div>
              <div className={style.name}>{props.firstName}<br />{props.secondName}</div>
            </div>

    )
}

export default Friend