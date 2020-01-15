import React from 'react';
import {withRouter} from 'react-router-dom';


const Btn = (props) => {
    // console.log(props);
    const bntClick = (e) => {
        if (props.st) {
            console.log(props.st); // передаем в консоль данные из форм
            props.history.push(props.link); // переход по ссылке
        }
    }
    return (
        <div className={'btn'} onClick={bntClick}>
            <div>{props.bnttext}</div>
        </div>
    );
}
// export default Btn;

export default withRouter(Btn);
