import React from 'react';
import s from './Header.module.css'
import s1 from './s1.png'
import c2 from './c2.png'
import s3 from './s3.png'
import n4 from './n4.png'


const Header = () => {
return <header className={s.header}>
    <img src='https://telegram.org.ru/uploads/posts/2017-03/1490198612_2.png'></img>
    <img src={s1} />
    <img src={c2} />
    <img src={s3} />
    <img src={n4} />
</header>
}

export default Header;