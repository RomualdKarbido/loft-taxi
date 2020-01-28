import React from "react";

const Toolltip = () => {
    return (
        <div className='profile__tool'>
            <div className='profile__tool-icon'>
                <i className='mdi mdi-help-rhombus-outline'></i>
            </div>
            <div className='profile__tool-box'>
                <div className='profile__tool-text'>Три последние цифры на обратной строне карты</div>
            </div>
        </div>
    )
}

export default Toolltip;
