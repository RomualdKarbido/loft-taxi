import React from 'react';
import {Link} from "react-router-dom";


const Btn = (props) => {
    // console.log(props);
    const bntClick = (e) => {
        if (props.st) {
            console.log(props.st) // передаем в консоль данные из форм
        }
    }
    return (
        <div className={'btn'} onClick={bntClick}>
            <Link to={props.link}>{props.bnttext}</Link>
        </div>
    );
}
export default Btn;
