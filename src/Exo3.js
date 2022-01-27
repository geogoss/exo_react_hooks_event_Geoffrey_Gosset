import { Alert } from 'bootstrap';
import React from 'react';

export const Exo3 = () => {

    let copyText = (e) => {
        let test =  alert (e.target.value)
    };



    return (
        <div className='cadreExo3 mt-5'>
            <h2>Exo3</h2>
            <p>copie dans alert</p>
            <input onCopy={copyText} type="text"/>
        </div>
    );
}

