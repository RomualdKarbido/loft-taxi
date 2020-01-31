import React from 'react';
import {withRouter} from 'react-router-dom';


const Btn = (props) => {
    const bntClick = (e) => {
        if (props.st) {
            console.log(props.st); // передаем в консоль данные из форм
            // props.history.push(props.link); // переход по ссылке
        }
    }
    return (
        <div className={'btn'} onClick={bntClick}>
            <span>{props.bnttext}</span>
        </div>
    );
}


// export default withRouter(Btn);
export default Btn;
