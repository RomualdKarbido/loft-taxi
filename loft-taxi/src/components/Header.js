import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={'header'}>
           <div className={'header__wrap'}>
               <div className={'header__logo'}>Logo</div>
               <div className={'header__right'}>
                   <Link to={'/profil'}>Профиль</Link>
                   <Link to={'/map'}>Карта</Link>
                   <Link to={'/'}>Выйти</Link>
               </div>
           </div>
        </div>

    );
}

export default Header;
