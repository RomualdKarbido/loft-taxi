import React from 'react';
import { Link } from "react-router-dom";


const Btn = (props) => {


    return (
        <div className={'btn'}>
            <Link  to={props.link}>{props.bnttext}</Link>
        </div>
    );
}
export default Btn;
