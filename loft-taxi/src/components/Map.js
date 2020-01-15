import React from 'react';
import Header from "./Header";


function Map() {
    return (
        <div>
           <Header/>
           <div className={'map'}>
               <div className={'map__content'}>
                   <h1>Тут карта</h1>
               </div>
           </div>
        </div>

    );
}

export default Map;
