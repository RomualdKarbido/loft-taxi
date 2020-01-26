import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import Map from "../map/Map";
import Profile from "../profile/Profile";
import {Context} from "../../context";


const Header = (props) => {

    const {logOut, routR1} = useContext(Context);

    return <div className='header'>
        <div className={'header__wrap'}>
            <div  className='header__logo' data-testid={'logo'}  onClick={() => routR1(<Profile/>, 'profile')}></div>
            <div className={'header__right'}>
                <div className={'header__right-item'} onClick={() => routR1(<Map/>, 'map')}>Карта</div>
                <div className={'header__right-item'} onClick={() => routR1(<Profile/>, 'profile')}>Профиль
                </div>
                <div className={'header__right-item'} onClick={logOut}>Выйти</div>
            </div>
        </div>

    </div>
}


export default Header;
// <div>
//     <div className={'header'}>
//         <div className={'header__wrap'}>
//             <Link to={'/profile'} className={'header__logo'}></Link>
//             <div className={'header__right'}>
//                 <NavLink activeClassName="active" className={'header__right-item'} to={'/map'}>Карта</NavLink>
//                 <NavLink activeClassName="active" className={'header__right-item'} to={'/profile'}>Профиль</NavLink>
//                 <NavLink exact={true} className={'header__right-item'} to={'/'}>Выйти</NavLink>
//             </div>
//         </div>
//     </div>
//     {state.match.path === '/map'
//         ? <Map/>
//         : <Profile/>}
// </div>
